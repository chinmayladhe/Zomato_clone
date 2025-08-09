import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/tomato_app")
    .then(() => console.log("DB Connected"));
};
