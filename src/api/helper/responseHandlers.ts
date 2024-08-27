import { AxiosError, AxiosResponse } from 'axios';

// 응답 성공 시 처리
export const handleResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// 응답 에러 시 처리
export const handleResponseError = (error: AxiosError): Promise<AxiosError> => {
  const status = error.response?.status;

  const errorMessages: Record<number, string> = {
    401: 'Unauthorized: Please log in.',
    404: 'Not Found: Invalid request.',
    500: 'Server Error: Please try again later.',
  };

  if (status && errorMessages[status]) {
    console.error(errorMessages[status]);
  }

  console.error('Response Error:', error.message);

  return Promise.reject(error);
};
