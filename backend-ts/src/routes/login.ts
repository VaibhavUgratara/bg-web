import express from "express";
import { handleLogin } from "../controllers/users";

const loginRoute = express.Router();
loginRoute.post("/login", handleLogin);

export default loginRoute;
