const mongoose = require("mongoose");

const SingleOrderItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const OrderSchema = mongoose.Schema(
    {
    orderItems: [SingleOrderItemSchema],
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: false },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: 0.0 },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Order", OrderSchema);
  

