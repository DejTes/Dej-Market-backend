const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name: {type: String, required: true},
  rating: {type: Number, required: true},
  comment: {type: String, required: true},

}, {
  timestamps: true,
})
const ProductSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: [true, 'Please provide company'],
      enum: {
        values: ['apple', 'hp', 'dell'],
        message: '{VALUE} is not supported',
      },
    },
      category: {
        type: String,
        required: [true, 'Please provide product category'],
        enum: ['gaming laptop', '2-in-1', 'business laptops'],
      },
      description: {
        type: String,
        required: [true, 'Please provide product description'],
        maxlength: [500, 'Description can not be more than 1000 characters'],
      },
      reviews: [reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
    numOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    new: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
