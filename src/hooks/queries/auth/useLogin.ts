import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login } from '@/api/apiRequests/auth';
import { ILoginRequest, ILoginResponse } from '@/api/types/auth';
import useNavigate from '@/hooks/useNavigate';

function useLogin() {
  const { goTo } = useNavigate();

  const onSuccess = () => {
    goTo('/');
  };

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<ILoginResponse, AxiosError, ILoginRequest>({
    mutationFn: login,
    onSuccess,
    onError,
  });
}

export default useLogin;
