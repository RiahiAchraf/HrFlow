import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const API_KEY = 'askr_dbfb6f33e7d3c6b6e334b2d420f81465';
const USER_EMAIL = 'riahiachraf1@gmail.com';

axios.interceptors.request.use(
  async (config) => {
    config.headers['x-api-key'] = API_KEY;
    config.headers['x-user-email'] = USER_EMAIL;

    return config;
  },

  (error) => Promise.reject(error),
);

export const axiosPrivate = axios;
