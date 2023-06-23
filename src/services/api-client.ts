import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8b69d037e4674d9f9e285f6d538e0e0b"
    }
})