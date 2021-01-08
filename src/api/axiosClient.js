import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json', //application/x-www-form-urlencoded
        'Accept': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async(config) => {
    // Handle token here ...
    const token = localStorage.getItem('token');
    if (token) {
        //config.headers.Authorization = `Token ${token}`;
    }

    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosClient;