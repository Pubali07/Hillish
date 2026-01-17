import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending", // can be updated to "completed", etc.
  },
});

export default mongoose.model("Order", orderSchema);
