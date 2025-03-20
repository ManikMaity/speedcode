import { Request, Response } from "express";
import { customSuccessResponse, handleErrorResponse } from "../utils/response";
import { StatusCodes } from "http-status-codes";
import { userSigninService, userSignupService } from "../services/user.service";

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


export async function userSigninController(req : Request, res : Response) {
    try {
        const {email, password} = req.body;
        const response = await userSigninService(email, password);
        res.status(StatusCodes.OK).json(customSuccessResponse("User signed in successfully", response));
    }
    catch (error) {
        handleErrorResponse(error, res);
    }
}