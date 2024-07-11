import { BlogModel } from "../../../database/models/blog.model.js";
import jwt from "jsonwebtoken";

export const addBlog = async (req, res) => {
  const { titel, desc } = req.body;
  await BlogModel.insertMany({ titel, desc, createdBy :req.Id });
  res.json({ message: "success" });
};

export const getAllBlogs = async (req, res) => {
  let blogs = await BlogModel.find().populate("createdBy", "name -_id");
  res.json({ message: "success", blogs });
};

export const getUserBlogs = async (req, res) => {
  const { id } = req.params;
  let blogs = await BlogModel.find({ createdBy: id }).populate(
    "createdBy",
    "name -_id"
  );
  res.json({ message: "success", blogs });
};

export const updateBlog = async (req, res) => {
  const { titel, desc, _id } = req.body;
  let blog = await BlogModel.findByIdAndUpdate(
    { _id },
    { titel, desc },
    { new: true }
  );
  if (blog) {
    res.json({ message: "success" });
  } else {
    res.json({ message: "blog not found" });
  }
};

export const deleteBlog = async (req, res) => {
  const { _id } = req.body;
  let blog = await BlogModel.findByIdAndDelete({ _id });
  if (blog) {
    res.json({ message: "success" });
  } else {
    res.json({ message: "blog not found" });
  }
};
