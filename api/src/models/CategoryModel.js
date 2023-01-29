const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Category must have name!'],
    trim: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
