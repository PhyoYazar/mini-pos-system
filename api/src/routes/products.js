const express = require('express');
const productController = require('../controllers/productController');
// const authController = require('../controllers/authController');

const router = express.Router();

//TODO router.use(authController.protect);

router
  .route('/')
  .get(productController.getAllProduct)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
