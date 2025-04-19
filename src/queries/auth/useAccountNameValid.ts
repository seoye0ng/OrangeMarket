import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { accountValid } from '@/api/apiRequests/auth';
import { IAccountValidRequest, IAccountValidResponse } from '@/api/types/auth';

function useAccountNameValid() {
  const onSuccess = () => {};

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<IAccountValidResponse, AxiosError, IAccountValidRequest>({
    mutationFn: accountValid,
    onSuccess,
    onError,
  });
}

export default useAccountNameValid;
