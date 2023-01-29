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

  if (order) {
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

//TODO create order must check already exist or not
exports.createOrder = factory.createOne(Order);

exports.getAllOrder = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);

exports.getAllOrderDetailsByUser = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    return next(new AppError('User Id is invalid.', 400));
  }

  const orders = await Order.find({ user: userId, bought: { $ne: true } });

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
