const Order = require('../models/OrderModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.setUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.checkOrderIsExist = catchAsync(async (req, res, next) => {
  const order = await Order.find({
    user: req.body.user,
    product: req.body.product,
  });

  if (order.length > 0) {
    const updatedOrder = await Order.findByIdAndUpdate(
      order[0]._id,
      { total_products: order[0].total_products + 1 },
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: updatedOrder,
    });
  } else {
    next();
  }
});

exports.createOrder = factory.createOne(Order);
exports.getAllOrder = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);

exports.getAllOrderDetailsByUser = catchAsync(async (req, res, next) => {
  let user = req.params.userId;

  if (!user) {
    user = req.user.id;
  }

  const orders = await Order.find({ user, bought: { $ne: true } });

  const subTotal = orders.reduce((acc, order) => acc + order.total_price, 0);
  const tax = subTotal * 0.05; // tax is (5%)
  const total = subTotal + tax;

  res.status(200).json({
    status: 'success',
    data: {
      data: orders,
      subTotal,
      tax,
      total,
    },
  });
});

exports.payNow = catchAsync(async (req, res, next) => {
  let user = req.params.userId;
  if (!user) user = req.user.id;

  const userOrders = await Order.find({
    user: user,
    bought: { $ne: true },
  });

  if (userOrders.length === 0) {
    return next(
      new AppError('There is no orders. Please take one order and pay now.'),
      404,
    );
  }

  const updatedOrders = userOrders.map(
    async (order) =>
      await Order.findByIdAndUpdate(
        order._id,
        { bought: true },
        { new: true, runValidators: true },
      ),
  );

  res.status(201).json({
    status: 'success',
    message: 'You bought all products of your order lists.',
    data: updatedOrders,
  });
});
