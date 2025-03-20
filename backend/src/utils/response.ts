import { Response } from "express";
import {StatusCodes} from "http-status-codes";

export function customErrorResponse (err : any){
    return {
        success : false,
        message : err.message || "Internal Server Error",
        explanation : err.explanation || ["Something went wrong"],
        data : {}
    }
}

export function customSuccessResponse(message : string, data : any){
    return {
        success : true,
        message : message || "Success",
        data : data || {},
        error : {}
    }
}


export function handleErrorResponse(err : any, res : Response){
    if (err.statusCode) {
        res.status(err.statusCode).json(customErrorResponse(err));
    }
    else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(customErrorResponse(err));
    }
}