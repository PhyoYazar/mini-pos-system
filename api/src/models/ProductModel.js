const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Product must have title!'],
      trim: true,
    },

    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Category must belong to a product.'],
    },

    photo: String,

    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
  },
  { timestamps: true },
);

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: '-__v',
  });

  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
