import axios from "axios";

const customAxios = axios.create();

customAxios.interceptors.request.use(
  (config) => {
    // we can add token or any extra information before all requests.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // we can intercept before the response and redirect if token not authorized.
    return Promise.reject(error);
  }
);

const baseUrl = process.env.REACT_APP_BASE_URL;

export { customAxios, baseUrl };
