import { Request } from "express";
function validateBlogPost(req: Request) {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    return "title or content or category are missin";
  }
  return null;
}

export default validateBlogPost;
