const express = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');

const router = express.Router();

//TODO
router.use(authController.protect);

router
  .route('/')
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getCategory)
  .patch(
    // authController.restrictTo('admin'),
    categoryController.updateCategory,
  )
  .delete(
    // authController.restrictTo('admin'),
    categoryController.deleteCategory,
  );

module.exports = router;
