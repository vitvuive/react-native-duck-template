import { AxiosRequestConfig } from 'axios';

import { ECommonResponseCode, EHttpResponseCode } from './message';

export interface ICustomResponse {
  code: ECommonResponseCode;
  message: string;
}

export interface IApiResponse<R> extends ICustomResponse {
  result: R | null;
  status?: EHttpResponseCode;
  statusText?: string;
}

export interface IApiError extends IApiResponse<never> {}

export interface IApiRequest {
  <T = never, E = unknown>(url: string, config?: AxiosRequestConfig): Promise<
    IApiResponse<T> & E
  >;
}

export interface IApiRequestWithPayload {
  <T = never, E = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T> & E>;
}
