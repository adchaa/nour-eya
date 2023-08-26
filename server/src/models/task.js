import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    date: Date,
  },
  { timestamps: true }
);

export default mongoose.model("task", schema);
