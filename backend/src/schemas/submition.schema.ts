import { Schema, model } from "mongoose";

const submitionSchema = new Schema({
    problemId : {
        type : Schema.Types.ObjectId,
        ref : "Problem",
        required : [true, "problemId is required"]
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : [true, "userId is required"]
    },
    code : {
        type : String,
        required : [true, "code is required"]
    },
    language : {
        type : String,
        required : [true, "language is required"]
    },
    status : {
        type : String,
        required : [true, "status is required"],
        enum : ["pending", "accepted", "rejected"],
        default : "pending"
    },
    testCasesPassed : {
        type : Number,
        required : [true, "testCasesPassed is required"],
        default : 0
    },
    totalTestCases : {
        type : Number,
        required : [true, "totalTestCases is required"],
        default : 0
    }
}, {timestamps : true});



const submitionModel = model("Submition", submitionSchema);

export default submitionModel;