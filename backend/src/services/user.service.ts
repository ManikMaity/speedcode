import { SALT_ROUND } from "../config/server.config";
import userRepo from "../repositories/user.repo";
import bcrypt from "bcrypt";
import { generateUsername } from "../utils/utilFunc";

export async function userSignupService(email : string, password : string, description : string) {
    const exitingUser = await userRepo.findByEmail(email);
    if (exitingUser) throw {
        status : 400,
        message : "User already exists",
        error : ["User already exists"]
    }
    const hashedPassword = bcrypt.hashSync(password, SALT_ROUND);
    const username = generateUsername(email);
    const avatar = `https://robohash.org/${username}`
    const user = await userRepo.create({email, password : hashedPassword, description, username, avatar});
    return user;
}