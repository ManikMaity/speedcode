import axios from "axios";
import { BACKEND_URL } from "./client.config";

const axiosInstance = axios.create({
    baseURL : BACKEND_URL,
})


export default axiosInstance;