/* eslint-disable prettier/prettier */
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

//Middleware which embeds in userRoutes and get current user
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

//!UPDATE USER
exports.updateMe = catchAsync(async (req, res, next) => {
  //filtered out unwanted fields names that are not allowed to be updated
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password udates. Please use /updateMyPassword'
      ),
      400
    );
  }
  const filteredBody = filterObj(req.body, 'name', 'email');

  // update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    validators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

//!ADD TOUR TO FAVORITE
exports.addTourToFavorite = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  console.log('User Back', user);
  //   if (!user) {
  //     return next(
  //       new AppError(
  //         'If you want to add this tour to your favorites, please Login!'
  //       ),
  //       401
  //     );
  //   }
  const tour = req.body.tourId;
  if (user.favorite.includes(tour)) {
    return next(
      new AppError('This tour is already on your Favorite list!'),
      403
    );
  }
  await user.updateOne({ $push: { favorite: tour } });

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
// // //!ADD TOUR TO FAVORITE
// exports.addTourToFavorite = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     const tour = req.body.tourId;
//     if (!user.favorite.includes(tour)) {
//       await user.updateOne({ $push: { favorite: tour } });
//       res.status(200).json({
//         status: 'success',
//         data: {
//           user,
//         },
//       });
//     } else {
//       res.status(403).json({
//         status: 'error',
//         message: 'This tour is already on your Favorite list!',
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       status: 'fail',
//     });
//   }
// };

// !REMOVE TOUR FROM FAVORITE
exports.removeTourFromFavorite = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const tour = req.body.tourId;
  await user.updateOne({ $pull: { favorite: tour } });
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

//!DELETE USER
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not defined! Please use signup instead',
  });
};

//!GET ONE USER
exports.getUser = factory.getOne(User);
//!GET ALL USERS
exports.getAllUsers = factory.getAll(User);
//Do NOT update password with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
