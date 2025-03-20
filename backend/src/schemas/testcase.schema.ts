import { Schema, model } from "mongoose";



const testcaseSchema = new Schema({
    problemId : {
        type : Schema.Types.ObjectId,
        ref : "Problem",
        required : [true, "problemId is required"]
    },
    input : {
        type : String,
        required : [true, "input is required"]
    },
    output : {
        type : String,
        required : [true, "output is required"]
    }
}, {timestamps : true});



const testcaseModel = model("TestCase", testcaseSchema);

export default testcaseModel;