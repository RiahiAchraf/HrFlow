import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const USER_EMAIL = process.env.NEXT_PUBLIC_USER_EMAIL;

axios.interceptors.request.use(
  async (config) => {
    config.headers['x-api-key'] = API_KEY;
    config.headers['x-user-email'] = USER_EMAIL;

    return config;
  },

  (error) => Promise.reject(error),
);

export const axiosPrivate = axios;
