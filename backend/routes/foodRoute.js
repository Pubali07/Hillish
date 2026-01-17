import express from 'express';
import { addFood, getAllFoods } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage });

// Route to add a new food item (POST)
foodRouter.post("/add", upload.single("image"), addFood);

// Route to get all food items (GET)
foodRouter.get("/all", getAllFoods);

export default foodRouter;
