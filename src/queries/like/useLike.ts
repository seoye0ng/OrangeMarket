import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { like } from '@/api/apiRequests/like';
import { IPostDetail } from '@/api/types/post';

function useLike() {
  return useMutation<IPostDetail, AxiosError, { postId: string }>({
    mutationFn: ({ postId }) => like(postId),
    onError: (err) => {
      console.error('like failed', err);
    },
  });
}

export default useLike;
