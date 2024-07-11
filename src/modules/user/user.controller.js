import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../database/models/user.model.js";
import { generateToken } from "../../utils/generateToken.js";

export const singup = async (req, res) => {
  const { name, password, email } = req.body;
  let user = await UserModel.findOne({ email });
  if (user) {
    res.json({ message: "user already exist" });
  } else {
    bcrypt.hash(
      password,
      Number(process.env.ROUND),
      async function (err, hash) {
        await UserModel.insertMany({ name, password: hash, email });
        res.json({ message: "success" });
      }
    );
  }
};

export const singIn = async (req, res) => {
  const { password, email } = req.body;

  let user = await UserModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      let token = generateToken({
        name: user.name,
        role: user.role,
        Id: user._id,
      });
      res.json({ message: "login", token });
    } else {
      res.json({ message: "password not match" });
    }
  } else {
    res.json({ message: "user not found" });
  }
};
