import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role:{
      type: String,
      enum:["admin", "user"],
      default: "user"
    }
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", userSchema);
