import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// 🔥 CORS Config
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/uploads", express.static("uploads"));

// Connect to DB
connectDB();

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

// API routes
app.use("/api/food", foodRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/order", orderRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API working");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
