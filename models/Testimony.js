// backend/models/Testimony.js
import mongoose from "mongoose";

const testimonySchema = new mongoose.Schema({
  name: { type: String, required: true },
  testimony: { type: String, required: true },
},
{
   timestamps
});

const Testimony = mongoose.model("Testimony", testimonySchema);
export default Testimony;
