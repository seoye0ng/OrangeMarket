import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login } from '@/api/apiRequests/auth';
import { ILoginRequest, ILoginResponse } from '@/api/types/auth';

function useLogin() {
  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<ILoginResponse, AxiosError, ILoginRequest>({
    mutationFn: login,
    onError,
  });
}

export default useLogin;
