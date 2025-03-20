import dotenv from "dotenv";

dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;
export const DB_URL = process.env.DB_CONNECT_STRING || "";