import axios from "axios";
const apiHelper = axios.create({
    baseURL: "https://reqres.in/api/",
});

apiHelper.interceptors.request.use((config) => {
    //Update config here

    return config;
});

apiHelper.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiHelper;
