import axios from "axios";
import {AppConfiguration} from "read-appsettings-json";
const defaultAxiosApiInstance = axios.create({
    //baseURL: window.REACT_APP_DEVICE_API_BASE_URL,
    baseURL: AppConfiguration.Setting().apiEndpoint ,//process.env.REACT_APP_DEVICE_API_BASE_URL,
    headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
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
        console.log('axios response data');
        return response.data;
    },
    (error) => {
        // Do something with response error
        console.log('error ---' + error);
        if (error.response!=null && error.response.status === 401) {
            return error.response.data;
        }
        else {
            return Promise.reject(error);
        }
    }
);
export default defaultAxiosApiInstance;
