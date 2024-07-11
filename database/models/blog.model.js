import mongoose from "mongoose";

export const blogSchema = mongoose.Schema(
  {
    titel: String,
    desc: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    token : String,
  },
  {
    timestamps: true,
  }
);

export const BlogModel = mongoose.model("Blog", blogSchema);
