const mongoose = require("mongoose");
const validator = require('validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
},{
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
