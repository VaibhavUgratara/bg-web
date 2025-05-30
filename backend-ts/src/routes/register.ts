import express from "express";
import { handleRegister } from "../controllers/users";

const registerRoute = express.Router();
registerRoute.post("/register", handleRegister);

export default registerRoute;
