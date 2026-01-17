import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding food" });
    }
};

// Get all food items
const getAllFoods = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json(foods);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to fetch foods" });
    }
};

export { addFood, getAllFoods };
