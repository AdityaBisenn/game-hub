import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d9c993f7f421484a861e942d7ab1493f"
    }
})