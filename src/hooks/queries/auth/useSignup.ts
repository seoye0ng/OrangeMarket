import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { signup } from '@/api/apiRequests/auth';
import { ISignUpRequest, ISignupResponse } from '@/api/types/auth';
import useNavigate from '@/hooks/useNavigate';

function useSignup() {
  const { goTo } = useNavigate();

  const onSuccess = () => {
    goTo('/login');
  };

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  // useMutation에서 제네릭 타입을 지정해줘야 하는 항목은 기본적으로 세 가지(TData, TError, TVariables)
  return useMutation<ISignupResponse, AxiosError, ISignUpRequest>({
    mutationFn: signup,
    onSuccess,
    onError,
  });
}

export default useSignup;
