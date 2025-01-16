import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pubali803:12345@cluster0.oatx1.mongodb.net/Food del').then(()=>console.log("DB connected"));
}