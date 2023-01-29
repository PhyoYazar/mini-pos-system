const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Order must belong to a product.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Order must belong to a user'],
    },

    product_price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },

    total_products: {
      type: Number,
      default: 1,
      min: [1, 'An order must have at least 1 product'],
    },

    bought: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

orderSchema.virtual('total_price').get(function () {
  return this.product_price * this.total_products;
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
