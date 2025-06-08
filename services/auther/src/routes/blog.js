
import express from 'express';
import { createBlog, deleteBlog, updateBlog } from '../controller/blog.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post("/create-blog",upload.single('image'),createBlog)
router.put("/update-blog/:id",updateBlog)
router.delete("/delete-blog/:id",deleteBlog)
export default router;
[]