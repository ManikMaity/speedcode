import { Router } from "express";
import { validate } from "../../validations/validate";
import { userSignupSchema } from "../../validations/user.validation";
import { userSignupController } from "../../controllers/user.controller";

const userRouter = Router();

userRouter.post("/signup", validate(userSignupSchema),  userSignupController)

export default userRouter;