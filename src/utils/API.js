import Axios from 'axios';
import {  SERVER_URL } from './constants';
import { getUser } from './Helpers';

const API = Axios.create({
  baseURL: `${SERVER_URL}/api/`,
  timeout: 10000
});

API.interceptors.request.use((config) => {
  const user = getUser();
  if (user && user.token)
    config.headers["x-auth-token"] = `${user.token}`;
    config.headers['Content-Type'] = 'application/json';
    return config;
});

export default API;