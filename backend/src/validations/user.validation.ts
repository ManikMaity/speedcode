import {z} from "zod";

export const userSignupSchema = z.object({
    email : z.string({
        required_error : "email is required",
        invalid_type_error : "email must be a string"
    }).email("email must be a valid email address"),

    password : z.string({
        required_error : "password is required",
        invalid_type_error : "password must be a string"
    }).min(6, "password must be at least 6 characters").max(20, "password must be at most 20 characters"),
    description : z.string({
        invalid_type_error : "description must be a string"
    }).max(200, "description must be at most 200 characters").optional()
})


export const userSigninSchema = z.object({
    email : z.string({
        required_error : "email is required",
        invalid_type_error : "email must be a string"
    }).email("email must be a valid email address"),
    password : z.string({
        required_error : "password is required",
        invalid_type_error : "password must be a string"
    })
})