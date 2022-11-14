import axios from 'axios';
import { camelizeKeys, normalizeResponse } from './utils';

axios.defaults.baseURL = 'https://snappfood.ir';

axios.interceptors.response.use(camelizeKeys);
axios.interceptors.response.use(normalizeResponse);

export default axios;
