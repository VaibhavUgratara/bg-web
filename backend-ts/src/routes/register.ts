import express from "express";
import User from "../models/Register";
import { validateRegisterInput } from "../utils/validateRegister";

const registerRoute = express.Router();

registerRoute.post("/register", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const error = validateRegisterInput(username, name, email, password);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: "Email already registered" });
      return;
    }

    const newUser = new User({ name, email, password, username });
    await newUser.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.error("Error! Registering", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default registerRoute;
