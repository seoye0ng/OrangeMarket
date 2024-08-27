/* eslint-disable no-console */
import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    /* 요청 전 수행할 작업 (예: 인증 헤더 추가 등) */
    // const access_token = getCookie('access_token');
    // config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    // 요청 에러 시 수행할 작업
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => {
    // 응답 성공 시 처리
    return response;
  },
  (error) => {
    const status = error.response?.status;
    // 응답 오류 처리
    if (status === 401) {
      // 로그인 필요
      console.error('unauthorised');
    }
    if (status === 404) {
      // 잘못된 요청
      console.error('not-found');
    }
    if (status === 500) {
      // 서버 문제 발생
      console.error('server-error');
    }
    return Promise.reject(error);
  },
);

export default instance;
