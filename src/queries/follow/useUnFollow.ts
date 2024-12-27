import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { unfollow } from '@/api/apiRequests/follow';
import { IFollowResponse } from '@/api/types/follow';

function useUnFollow() {
  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<IFollowResponse, AxiosError, { accountName: string }>({
    mutationFn: ({ accountName }) => unfollow(accountName),
    onError,
  });
}

export default useUnFollow;
