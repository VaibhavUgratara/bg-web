import express from "express";
import { getAllPosts, uploadPost } from "../controllers/posts";
const postsRoute = express.Router();

postsRoute.get("/", getAllPosts);
postsRoute.post("/", uploadPost);
