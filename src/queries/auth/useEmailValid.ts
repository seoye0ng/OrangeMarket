import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { emailValid } from '@/api/apiRequests/auth';
import { IEmailValidRequest, IEmailValidResponse } from '@/api/types/auth';

function useEmailValid() {
  const onSuccess = () => {
    console.log('이메일 중복확인 성공');
  };

  const onError = (error: AxiosError) => {
    console.error(error.response?.data);
    console.error('이미 가입된 이메일입니다.');
  };

  return useMutation<IEmailValidResponse, AxiosError, IEmailValidRequest>({
    mutationFn: emailValid,
    onSuccess,
    onError,
  });
}

export default useEmailValid;
