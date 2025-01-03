import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { editAccount } from '@/api/apiRequests/profile';
import { IEditAccountRequest, IProfileResponse } from '@/api/types/user';
import useNavigate from '@/hooks/useNavigate';

function useEditAccount() {
  const { goBack } = useNavigate();

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  const onSuccess = () => {
    console.log('success');
    goBack();
  };

  return useMutation<IProfileResponse, AxiosError, IEditAccountRequest>({
    mutationFn: editAccount,
    onSuccess,
    onError,
  });
}

export default useEditAccount;
