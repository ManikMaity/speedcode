import { Request, Response } from "express";
import { customSuccessResponse, handleErrorResponse } from "../utils/response";
import { StatusCodes } from "http-status-codes";
import { userSignupService } from "../services/user.service";

export async function userSignupController(req : Request, res : Response) {
    try {
        const {email, password, description} = req.body;
        const user = await userSignupService(email, password, description);
        res.status(StatusCodes.CREATED).json(customSuccessResponse("User created successfully", user));
    }
    catch (error) {
        handleErrorResponse(error, res);
    }
}