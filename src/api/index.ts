import axios, { AxiosInstance } from 'axios';

import { handleRequest, handleRequestError } from './helper/requestHandlers';
import { handleResponse, handleResponseError } from './helper/responseHandlers';

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: '/api', // Next.js의 API 라우트 사용
  withCredentials: true,
});

// 인터셉터 추가
instance.interceptors.request.use(handleRequest, handleRequestError);
instance.interceptors.response.use(handleResponse, handleResponseError);

export default instance;
