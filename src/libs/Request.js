import axios from 'axios';
import { TIMEOUT_REQUEST } from '../constants/Request';

export default {
  getHeader() {
    const headers = { Accept: 'application/json' };
    return headers;
  },

  get(path, params = {}) {
    return axios.get(path, {
      headers: this.getHeader(),
      params,
      timeout: TIMEOUT_REQUEST,
    });
  },

  post(path, params = {}) {
    return axios.post(path,
      params,
      { headers: this.getHeader(), timeout: TIMEOUT_REQUEST },
    );
  },

  put(path, params = {}) {
    return axios.put(path,
      params,
      { headers: this.getHeader(), timeout: TIMEOUT_REQUEST },
    );
  },

  delete(path, params = {}) {
    return axios.delete(path, {
      headers: this.getHeader(),
      params,
      timeout: TIMEOUT_REQUEST,
    });
  },
};
