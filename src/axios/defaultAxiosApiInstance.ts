import axios from "axios";
const defaultAxiosApiInstance = axios.create({
    //baseURL: window.REACT_APP_DEVICE_API_BASE_URL,
    baseURL: process.env.REACT_APP_DEVICE_API_BASE_URL,
    headers: {
        Accept: "application/json",
    },
});

defaultAxiosApiInstance.interceptors.request.use(
    (request) => {

        return request;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);
defaultAxiosApiInstance.interceptors.response.use(
    (response) => {
        // Do something with response data
        //return { data: response.data, errors: null };
        return response.data;
    },
    (error) => {
        // Do something with response error
        console.log(error);
        if (error.response.status === 401) {
            return error.response.data;
        }
        else {
            return Promise.reject(error);
        }
    }
);
export default defaultAxiosApiInstance;
