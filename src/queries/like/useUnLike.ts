import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { unLike } from '@/api/apiRequests/like';
import { IPostDetail } from '@/api/types/post';
import { postKeys } from '@/queries/post/postKeys';

function useUnLike() {
  const queryClient = useQueryClient();

  return useMutation<IPostDetail, AxiosError, { postId: string }>({
    mutationFn: ({ postId }) => unLike(postId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: postKeys.detail(variables.postId),
      });
      queryClient.invalidateQueries({
        queryKey: postKeys.listAll(),
      });
    },
    onError: (err) => {
      console.error('like failed', err);
    },
  });
}

export default useUnLike;
