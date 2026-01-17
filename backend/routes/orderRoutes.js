import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Save order after checkout
router.post("/create", async (req, res) => {
  try {
    const newOrder = new Order(req.body); // expecting full order data from frontend
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error("Error saving order:", err.message);
    res.status(500).json({ error: "Failed to save order" });
  }
});

export default router;
