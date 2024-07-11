import express from "express";
import { singIn, singup } from "./user.controller.js";
import { singInSchema, singUpSchema } from "./user.validation.js";
import { validation } from "../../middleware/validation.js";

const userRouter = express.Router();

userRouter.post("/singup", validation(singUpSchema), singup);
userRouter.post("/singIn", validation(singInSchema), singIn);

export default userRouter;
