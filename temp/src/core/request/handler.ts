import axios, { AxiosError } from 'axios';

import { IApiError, ICustomResponse } from './api';

export const defaultErrorHandler = (
  error: AxiosError<ICustomResponse>,
): Promise<IApiError> => {
  if (error.response) {
    const status = error.response.status;
    const statusText = error.response.statusText;

    // Business Level Error
    if (typeof error.response.data === 'object') {
      const code = error.response.data.code;
      const message = error.response.data.message || 'Unknown error';

      return Promise.reject({
        ...error.response.data,
        status,
        statusText,
        code,
        message,
      });
    }

    // Network Level Error
    const method = error.config?.method || '';
    const shortUrl = error.config?.url || '';
    const message = `${shortUrl} ${method.toUpperCase()} (${status} - ${statusText})`;

    if (error.response?.status === 403) {
      // Handle 403 error. -> Logout
    }

    return Promise.reject({ status, statusText, message });
  }

  if (axios.isCancel(error)) {
    return Promise.reject(null);
  }

  return Promise.reject({
    message: 'System error',
    statusText: 'unknown_failed',
  });
};
