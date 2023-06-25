import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ddd32a58cad540d2ad39a9d3aef48758"
    }
})