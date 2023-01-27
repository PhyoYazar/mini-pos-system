import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '../services/auth';

const token = getToken();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.baseURL = import.meta.env.VITE_REACT_API_ENDPOINT;
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${token ? token : ''}`;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log('request error => ', error);

  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.name === 'CanceledError' || error.name === 'AbortError') {
    console.log('Response ===>>> API fetching is canceled/aborted.');
  } else {
    console.log('response error => ', error);
  }

  return Promise.reject(error);
};

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
