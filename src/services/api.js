import axios from 'axios';
import env from '../config/env';

const api = axios.create({
  baseURL: env.api,
  timeout: 10000,
});

export default api;