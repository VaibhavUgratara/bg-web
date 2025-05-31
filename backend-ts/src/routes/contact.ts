import express from "express";
import handleContact from "../controllers/contacts";

const contactRoute = express.Router();

contactRoute.post("/contact", handleContact);

export default contactRoute;
