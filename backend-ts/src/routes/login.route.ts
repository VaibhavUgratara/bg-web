import express from "express";
import { handleLogin } from "../controllers/users";

const loginRoute = express.Router();
loginRoute.post("/", handleLogin);

export default loginRoute;
