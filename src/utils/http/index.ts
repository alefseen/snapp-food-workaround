import axios from 'axios';
import { camelizeKeys } from './utils';

axios.interceptors.response.use(camelizeKeys);

export default axios;
