import express from "express";
import { getAllUsers, getUserById } from "../controllers/users";

const userRoute = express.Router();
userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUserById);
export default userRoute;
