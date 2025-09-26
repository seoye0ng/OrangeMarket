import { AxiosRequestConfig } from 'axios';

import instance from '.';

/* GET 요청 */
export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig & { useBFF?: boolean },
): Promise<T> => {
  const finalConfig: AxiosRequestConfig = {
    ...config,
    baseURL:
      config?.useBFF === false ? process.env.NEXT_PUBLIC_BASE_URL : '/api',
  };

  const response = await instance.get<T>(url, finalConfig);
  return response.data;
};

/* POST 요청 */
export const postRequest = async <T, D = void>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig & { useBFF?: boolean },
): Promise<T> => {
  const finalConfig: AxiosRequestConfig = {
    ...config,
    baseURL:
      config?.useBFF === false ? process.env.NEXT_PUBLIC_BASE_URL : '/api',
  };

  const response = await instance.post<T>(url, data, finalConfig);
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
