import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { editAccount } from '@/api/apiRequests/profile';
import { IEditAccountRequest, IProfileResponse } from '@/api/types/user';

function useEditAccount() {
  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<IProfileResponse, AxiosError, IEditAccountRequest>({
    mutationFn: editAccount,
    onError,
  });
}

export default useEditAccount;
