import axios from 'axios';
// Utils
import config from '@/config';

const http = axios.create({ baseURL: config.apiEndPoint });

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default httpService;
