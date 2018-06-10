// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.
        
    config.params.APPID = '8e5eadaad6674b9ea1e7e66f59794d34';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});