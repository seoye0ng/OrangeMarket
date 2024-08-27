import { AxiosError, InternalAxiosRequestConfig } from 'axios';

// 요청 성공 시 처리
export const handleRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  // axios 버전이 오르면서 intercepters request 타입이 'AxiosRequestConfig'가 아닌 'InternalAxiosRequestConfig'로 바뀜
  /*
   * 요청 전 수행할 작업 (예: 인증 헤더 추가 등)
   * const access_token = getCookie('access_token');
   * config.headers.Authorization = `Bearer ${access_token}`;
   */
  return config;
};

// 요청 에러 시 처리
export const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error('Request Error:', error);
  return Promise.reject(error);
};
