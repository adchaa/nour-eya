import mongoose from "mongoose";

await mongoose.connect(process.env.DB);
console.log("DB connected");
