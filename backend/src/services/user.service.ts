import { JWT_SECRET, SALT_ROUND } from "../config/server.config";
import userRepo from "../repositories/user.repo";
import bcrypt from "bcrypt";
import { generateUsername } from "../utils/utilFunc";
import {StatusCodes} from "http-status-codes";
import jwt from "jsonwebtoken";

export async function userSignupService(email : string, password : string, description : string) {
    const exitingUser = await userRepo.findByEmail(email);
    if (exitingUser) throw {
        statusCode : 400,
        message : "User already exists",
        explanation : ["User already exists"]
    }
    const hashedPassword = bcrypt.hashSync(password, SALT_ROUND);
    const username = generateUsername(email);
    const avatar = `https://robohash.org/${username}`
    const user = await userRepo.create({email, password : hashedPassword, description, username, avatar});
    return user;
}


export async function userSigninService(email : string, password : string) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw {
        statusCode : StatusCodes.BAD_REQUEST,
        message : "User with this email dont exits",
        explanation : ["User with this email dont exits"]
    }
    if (!bcrypt.compareSync(password, user.password)) throw {
        statusCode : StatusCodes.BAD_REQUEST,
        message : "Password is incorrect",
        explanation : ["Password is incorrect"]
    }

    const token = jwt.sign({id : user._id}, JWT_SECRET);
    const {password : userPassword, ...restUser} = user;
    return {user : restUser, token}
}