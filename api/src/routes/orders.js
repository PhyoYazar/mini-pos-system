const express = require('express');
const orderController = require('../controllers/orderController');
// const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

//TODO router.use(authController.protect);

router
  .route('/')
  .get(orderController.getAllOrder)
  .post(orderController.createOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
