/* eslint-disable prettier/prettier */
const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.route('/').get(userController.getAllUsers);

//!Все что будет идти ниже этой функции будет защищено "authController.protect"
router.use(authController.protect);
router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

//!Все что будет идти ниже этой функции будет защищено "authController.protect" + "authController.restrictTo('admin')"
router.use(authController.restrictTo('admin'));

router.route('/').post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
