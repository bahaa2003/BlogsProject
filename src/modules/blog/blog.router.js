import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getUserBlogs, updateBlog } from "./blog.controller.js";
import { userAuth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import { addBlogSchema } from "./blog.validation.js";

const routerBlog = express.Router();

routerBlog.post("/", userAuth , validation(addBlogSchema) ,addBlog);
routerBlog.get("/" , userAuth ,getAllBlogs)
routerBlog.get("/:id" , getUserBlogs)
routerBlog.put("/", userAuth ,updateBlog)
routerBlog.delete("/", userAuth ,deleteBlog)

export default routerBlog;
