import { Schema, model } from "mongoose";


const problemSchema = new Schema({
    title : {
        type : String,
        required : [true, "title is required"],
        unique : [true, "title must be unique"],
    },
    description : {
        type : String,
        required : [true, "description is required"],
        default : ""
    },
    difficulty : {
        type : String,
        required : [true, "difficulty is required"],
        enum : ["easy", "medium", "hard"],
        default : "easy"
    },
    tags : {
        type : [String],
        required : [true, "tags are required"],
        default : []
    },
    testCases : [{
        type : Schema.Types.ObjectId,
        ref : "TestCase"
    }]
}, {timestamps : true});


const problemModel = model("Problem", problemSchema);

export default problemModel;