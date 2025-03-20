import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : [true, "username is required"],
        unique : [true, "username must be unique"],
    },
    email : {
        type : String,
        required : [true, "email is required"],
        unique : [true, "email must be unique"],
    },
    password : {
        type : String,
        required : [true, "password is required"],
    },
    solvedProblems : [
        {
            type : Schema.Types.ObjectId,
            ref : "Problem"
        }
    ],
    ranking : {
        type : Number,
        default : 0
    },
    description : {
        type : String,
        default : ""
    }

}, {timestamps : true});


const userModel = model("User", userSchema);

export default userModel;