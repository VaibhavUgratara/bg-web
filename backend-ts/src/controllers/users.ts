import { Request, Response } from "express";
import { validateRegisterInput } from "../utils/validateRegister";
import User from "../models/Register";
import { checkCredential } from "../utils/loginHelperFunctions";
import OnlineUser from "../models/Login";

async function handleRegister(req: Request, res: Response) {
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
}

async function handleLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const error = await checkCredential(email, password);

    if (error) {
      res.status(400).json({ error });
      return;
    }

    const user = await User.findOne({ email }).select("name");
    const userName = user?.name;

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
}
export { handleRegister, handleLogin };
