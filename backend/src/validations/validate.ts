import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export function validate(schema: ZodObject<any, any>) {
    return (req : Request, res : Response, next : NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch(error : any){
            res.status(401).json({
                success : false,
                message : "Invalid request",
                error : error.issues.map((issue : any) => issue.message)
            })
        }
    }
}