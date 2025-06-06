import { Request, Response } from "express";
import Post from "../models/Posts";
import User from "../models/Register";
import validateBlogPost from "../utils/blogpost";

async function getAllPosts(req: Request, res: Response) {
  const allPosts = await Post.find({});
  res.status(200).json({ allPosts });
}

async function getPostById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      res.status(400).json({ message: "Post will the id not found" });
    }
    res.json(post);
  } catch (err) {
    console.log("Error fetching post " + err);
    res.status(500).json({ message: err });
  }
}

async function uploadPost(req: Request, res: Response) {
  try {
    if (req.body === undefined) {
      res.status(400).json({ message: "You need to provide the blog post" });
      return;
    }
    const cookieId = req.cookies.uid;

    if (cookieId) {
      const user = await User.findOne({ cookieId });
      const userId = user?._id;
      if (userId) {
        const err = validateBlogPost(req);
        if (err) {
          res.status(400).json({ message: err });
          return;
        } else {
          const { title, content, category } = req.body;
          const newPost = new Post({
            title,
            content,
            category,
            authorId: userId,
          });
          await newPost.save();
          res.status(201).json({ message: "Post uploaded successfully" });
          return;
        }
      } else {
        res.status(200).json({
          message:
            "You need to first send the cookie uid which you've got when loggin in to upload post",
        });
      }
    } else {
      res.status(200).json({ message: "You need to first login" });
      return;
    }
  } catch (err) {
    console.log("Error! uploading post", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function editPost(req: Request, res: Response) {
  // TODO!!
  // 1- Implement editPost()
  // 2- The post shouldn't be edited by someone who is not authenticated
}

async function purgePostById(req: Request, res: Response) {
  try {
    const cookieId = req.cookies.uid;

    if (cookieId) {
      const user = await User.findOne({ cookieId });
      const userId = user?._id;
      if (userId) {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
          res.status(400).json({ message: `Post with ${id} not found` });
          return;
        }
        res.status(201).json({ message: "Post successfully deleted" });
      } else {
        res.status(200).json({
          message:
            "You need to first send the cookie uid which you've got when loggin in to upload post",
        });
      }
    } else {
      res.status(200).json({ message: "You need to first login" });
      return;
    }
  } catch (err) {
    console.log("Error! deleting post", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export { getAllPosts, purgePostById, editPost, getPostById, uploadPost };
