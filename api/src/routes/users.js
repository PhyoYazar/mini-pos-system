const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const orderRouter = require('./orders');

const router = express.Router();

//TODO
router.use(authController.protect);

// MERGE WITH ORDER ROUTE
router.use('/:userId/orders', orderRouter);

// UPDATE MY PASSWORD (as login user)
router.patch('/updateMyPassword', authController.updatePassword);

// GET ME (as login user)
router.get('/me', userController.getMe, userController.getUser);

// UPDATE ME 'patch' (as login user)
router.patch('/updateMe', userController.updateMe);

// DELETE USER (as login user)
router.delete('/deleteMe', userController.deleteMe);

//TODO ADMIN PERMISSION
router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getUsers).post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser) // as admin
  .delete(userController.deleteUser); // as admin

module.exports = router;
