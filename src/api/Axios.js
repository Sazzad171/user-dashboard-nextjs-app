import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://layout.layoutdesign.io/api/version_1'
});

Axios.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Bearer 28|I4bLpPoqEWlgmYh1NpeWVALGh58b2Ti1INGOnavv";

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default Axios;