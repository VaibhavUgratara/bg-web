import { Request, Response } from "express";
import Post from "../models/Posts";

async function getAllPosts(req: Request, res: Response) {
  const allPosts = Post.find({});
  res.status(200).json(allPosts);
}

async function getPostById(req: Request, res: Response) {
  // TODO!!
  // 1- Implement getPostById()
}

async function uploadPost(req: Request, res: Response) {
  // TODO!!
  // 1- Implement uploadPost()
  // 2- The post shouldn't be uploaded by someone who is not authenticated
}

async function editPost(req: Request, res: Response) {
  // TODO!!
  // 1- Implement editPost()
  // 2- The post shouldn't be edited by someone who is not authenticated
}

async function purgePost(req: Request, res: Response) {
  // TODO!!
  // 1- Implement uploadPosts()
  // 2- The post shouldn't be purged by someone who is not authenticated
}
export { getAllPosts, purgePost, editPost, getPostById, uploadPost };
