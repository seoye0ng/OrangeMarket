import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { login } from '@/api/apiRequests/auth';
import { ILoginRequest, ILoginResponse } from '@/api/types/auth';

function useLogin() {
  const router = useRouter();

  const onSuccess = () => {
    router.push('/');
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
