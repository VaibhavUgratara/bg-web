import { Request, Response } from "express";
import {
  validateRegisterInput,
  checkCredential,
  setSessionId,
} from "../utils/auth";
import User from "../models/Register";
import { v4 as uuidv4 } from "uuid";

async function handleRegister(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const error = validateRegisterInput(email, password);
    if (error) {
      res.status(400).json({ message: error });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email already registered" });
      return;
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.error("Error! Registering", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleLogin(req: Request, res: Response) {
  try {
    const cookieId = req.cookies.uid;

    if (cookieId) {
      const user = await User.findOne({ cookieId });
      const userEmail = user?.email;
      if (userEmail) {
        res.send(`You are already logged in: ${userEmail}`);
        return;
      }
    }

    if (!req.body || !req.body.email || !req.body.password) {
      res
        .status(400)
        .json({ message: "Hello, Email and password are required" });
      return;
    }
    const { email, password } = req.body;
    const error = await checkCredential(email, password);

    if (error) {
      res.status(400).json({ error });
      return;
    }

    const sessionId = uuidv4();
    res.cookie("uid", sessionId, {
      httpOnly: true,
      secure: false, // set to true in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    await setSessionId(email, sessionId); // Awaiting async function
    res.status(201).json({
      message: "User Logged In Successfully",
      sessionToken: sessionId,
    });
  } catch (err) {
    console.error("Error! Logging In", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleLogout(req: Request, res: Response) {
  const sessionId = req.cookies.uid;
  User.deleteOne({ sessionId });
  res.status(200).json({ message: "Logged out Successfully" });
}
export { handleRegister, handleLogin, handleLogout };
