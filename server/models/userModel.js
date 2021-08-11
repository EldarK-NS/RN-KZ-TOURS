/* eslint-disable prettier/prettier */
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name!'],
      minlenght: [5, 'A user name mast have more or equal then 5 characters!'],
      maxlength: [
        15,
        'A user name mast have less or equal then 10 characters!',
      ],
      trim: true, //удаление пробелов
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email!'],
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      enum: ['user', 'guide', 'lead-guide', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlenght: 6,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please comfirm your password'],
      validate: {
        //this only works on Create and Save!
        validator: function (el) {
          return el === this.password;
        }, // 3-rd party library-validator
        message: 'Passwords are not the same',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false, //свойство select - отображение поля при выводе досумента(false-скрыто)
    },
    favorite: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Tour',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//!hash a password
userSchema.pre('save', async function (next) {
  //only run this function if password was actually modified
  if (!this.isModified('password')) return next();
  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

//middleware hide inactivate users when we get all users list, this middleware start works if wi use methods with "find" like findOne, findBy..
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});
//! Middleware which allow to populate fields, and avoid repeating code
userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'favorite',
    select: '-guides',
  });
  next();
});

//!check a password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//!Check if user changed password and now uses old token
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  //false=not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
