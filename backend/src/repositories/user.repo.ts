import userModel from "../schemas/user.schema";
import crudFunctions from "./crud";

const userRepo = {
    ...crudFunctions(userModel),
    findByEmail : async (email : string) => {
        const user = userModel.findOne({email : email});
        return user;
    }
}

export default userRepo;