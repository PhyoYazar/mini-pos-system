const Order = require('../models/OrderModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// exports.setTourUserIds = (req, res, next) => {
//   // Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//TODO order details result
exports.getAllOrderDetailsByUser = catchAsync(async (req, res, next) => {
  next();
});

//TODO create order must check already exist or not
exports.createOrder = factory.createOne(Order);

exports.getAllOrder = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
