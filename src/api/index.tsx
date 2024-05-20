import axios from "axios";
import { ENDPOINT_API } from "./consts";

const api = axios.create({
    baseURL: ENDPOINT_API,
    timeout: 15000,
    headers: {
        "Accept": "application/json;version=v1_web",
        "Content-Type": "application/json"
    }
})

export default api;