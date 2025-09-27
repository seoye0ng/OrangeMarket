import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { unLike } from '@/api/apiRequests/like';
import { IPostDetail } from '@/api/types/post';

function useUnLike() {
  return useMutation<IPostDetail, AxiosError, { postId: string }>({
    mutationFn: ({ postId }) => unLike(postId),

    onError: (err) => {
      console.error('like failed', err);
    },
  });
}

export default useUnLike;
