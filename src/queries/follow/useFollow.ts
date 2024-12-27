import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { follow } from '@/api/apiRequests/follow';
import { IFollowResponse } from '@/api/types/follow';

function useFollow() {
  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<IFollowResponse, AxiosError, { accountName: string }>({
    mutationFn: ({ accountName }) => follow(accountName),
    onError,
  });
}

export default useFollow;
