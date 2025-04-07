// backend/models/Testimony.js
import mongoose from "mongoose";

const testimonySchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    testimony: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Testimony = mongoose.model("Testimony", testimonySchema);
export default Testimony;
