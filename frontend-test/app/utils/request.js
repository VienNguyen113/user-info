import axios from 'axios';
import { API_URL } from 'config';

export const request = (opts = {}) => {
  const defaultOptions = {
    ...opts,
  };
  /*
  |--------------------------------------------------
  | Custom axios api
  |--------------------------------------------------
  */

  const axiosApi = axios.create({
    baseURL: API_URL,
    ...defaultOptions,
  });

  return axiosApi;
};

export default request;
