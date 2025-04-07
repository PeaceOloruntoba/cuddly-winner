import express from "express";
const router = express.Router();
import Testimony from "../models/Testimony.js";
import authMiddleware from "../middleware/auth.js";

router.post("/", async (req, res) => {
  try {
    const newTestimony = new Testimony(req.body);
    const savedTestimony = await newTestimony.save();
    res.status(201).json(savedTestimony);
  } catch (error) {
    console.error("Error submitting testimony:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const testimonies = await Testimony.find().sort({ createdAt: -1 });
    res.json(testimonies);
  } catch (error) {
    console.error("Error fetching testimonies:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
