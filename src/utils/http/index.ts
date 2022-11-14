import axios from 'axios';
import { camelizeKeys } from './utils';

axios.defaults.baseURL = 'https://snappfood.ir';

axios.interceptors.response.use(camelizeKeys);

export default axios;
