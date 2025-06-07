
import express from 'express';
import { createBlog, deleteBlog, updateBlog } from '../controller/blog.js';

const router = express.Router();

router.post("/create-blog",createBlog)
router.put("/update-blog/:id",updateBlog)
router.delete("/delete-blog/:id",deleteBlog)
export default router;
[]