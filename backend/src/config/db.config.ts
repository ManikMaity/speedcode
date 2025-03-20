import { connect } from "mongoose";
import { DB_URL } from "./server.config";

export const connectDB = async () => {
    try {
        await connect(DB_URL);
        console.log("Connected to database");
    }
    catch (error) {
        console.log("Error connecting to database");
        throw error;
    }
}