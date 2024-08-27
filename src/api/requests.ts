import { AxiosRequestConfig } from 'axios';

import instance from '.';

/* GET 요청 */
export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.get(url, config);
  return response.data;
};

/* POST 요청 */
export const postRequest = async <T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.post(url, data, config);
  return response.data;
};

/* PUT 요청 */
export const putRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.put<T>(url, data, config);
  return response.data;
};

/* patch 요청 */
export const patchRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.patch<T>(url, data, config);
  return response.data;
};

/* DELETE 요청 */
export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.delete<T>(url, config);
  return response.data;
};
