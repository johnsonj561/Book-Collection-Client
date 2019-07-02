import axios from 'axios';
import { getToken } from './auth';

const DEFAULT_TIMEOUT = 3 * 1000;

const httpClient = axios.create({
  timeout: DEFAULT_TIMEOUT,
});


// Request Interceptor
// Appends Bearer Authorization token to headers
const onRequestFulfilled = (config) => {
  const token = getToken();
  if (!token) {
    return config;
  }
  const Authorization = `Bearer${token}`;
  const headers = { Authorization };
  return { ...config, headers };
};

httpClient.interceptors.request.use(onRequestFulfilled);


// Response Interceptors
// Extracts desired payload out of response and error
const onResponseFulfilled = response => response.data;

httpClient.interceptors.response.use(onResponseFulfilled);

export default httpClient;
