import express from "express";
import {
  getAllPosts,
  uploadPost,
  getPostById,
  purgePostById,
} from "../controllers/posts";
const postsRoute = express.Router();

postsRoute.get("/", getAllPosts);
postsRoute.post("/", uploadPost);
postsRoute.get("/:id", getPostById);
postsRoute.delete("/:id", purgePostById);
export default postsRoute;
