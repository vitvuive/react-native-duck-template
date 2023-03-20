import { API_URL } from '@env';
import axios from 'axios';

import { store } from '../store';

import { IApiRequest, IApiRequestWithPayload } from './api';
import { defaultErrorHandler } from './handler';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const { auth } = store.getState();
    if (auth.user) {
      config.headers['X-Sporta-Token'] = auth.user.api_token;
    }
    return config;
  },
  (error) => {
    return defaultErrorHandler(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return {
      ...response.data,
    };
  },
  (error) => {
    return defaultErrorHandler(error);
  },
);

class ApiRequest {
  static get: IApiRequest = instance.get;
  static head: IApiRequest = instance.head;
  static delete: IApiRequest = instance.delete;
  static put: IApiRequestWithPayload = instance.put;
  static post: IApiRequestWithPayload = instance.post;
  static patch: IApiRequestWithPayload = instance.patch;
}

export default ApiRequest;
