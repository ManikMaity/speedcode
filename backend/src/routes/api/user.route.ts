import { Router } from "express";
import { validate } from "../../validations/validate";
import { userSigninSchema, userSignupSchema } from "../../validations/user.validation";
import { userSigninController, userSignupController } from "../../controllers/user.controller";

const userRouter = Router();

userRouter.post("/signup", validate(userSignupSchema),  userSignupController);
userRouter.post("/signin", validate(userSigninSchema), userSigninController);

export default userRouter;