import express from "express";
import { handleLogout } from "../controllers/users";

const logoutRoute = express.Router();
logoutRoute.post("/", handleLogout);

export default logoutRoute;
