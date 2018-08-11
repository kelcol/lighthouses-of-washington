// Base API configuration
import axios from 'axios';

export const API = axios.create({
  baseURL: '//api.openweathermap.org/data/2.5/'
});

// interceptor function run before request
API.interceptors.request.use(function(config) {
  // Set common params for each request to the API
  config.params.APPID = '8e5eadaad6674b9ea1e7e66f59794d34';
  config.params.units = 'imperial';
  return config;  
}, function (error) {
  return Promise.reject(error);
});