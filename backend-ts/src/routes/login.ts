import express from "express";
import OnlineUser from "../models/Login";
import User from "../models/Register";
import { checkCredential } from "../utils/loginHelperFunctions";

const loginRoute = express.Router();
loginRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const error = await checkCredential(email, password);

    if (error) {
      res.status(400).json({ error });
      return;
    }

    // After loggingIn get the correpoding name of the user with the help of email
    const user = await User.findOne({ email }).select("name");
    const userName = user?.name;
    // Below functions checks if the user with it's name already logged in the first place or not
    if (await OnlineUser.findOne({ name: userName })) {
      res.status(200).json({ message: "You are already Logged In" });
      return;
    }
    // Saving the username in the list of online users table
    const newUser = new OnlineUser({ name: userName });
    await newUser.save();

    res.status(201).json({ message: "User Logged In Successfully" });
  } catch (err) {
    console.error("Error! Logging In", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default loginRoute;
