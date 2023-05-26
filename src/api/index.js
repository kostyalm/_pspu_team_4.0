import axios from "axios";

const API_URL = 'http://localhost:80/api';
// const API_URL = 'https://farm.vp-pspu.cf/api';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});
api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    let originalRequest = error.config
    if (error.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await api.get('/users/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return api.request(originalRequest);
        } catch (e) {
            console.log("Unauthorized");
        }
    }
});

export default api;