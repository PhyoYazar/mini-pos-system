const express = require('express');
const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

//TODO
router.use(authController.protect);

router.get('/details', orderController.getAllOrderDetailsByUser);
router.post('/payNow', orderController.payNow);

router
  .route('/')
  .get(orderController.getAllOrder)
  .post(
    orderController.setUserIds,
    orderController.checkOrderIsExist,
    orderController.createOrder,
  );

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
