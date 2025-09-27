import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { like } from '@/api/apiRequests/like';
import { IPostDetail } from '@/api/types/post';
import { postKeys } from '@/queries/post/postKeys';

function useLike() {
  const queryClient = useQueryClient();

  return useMutation<IPostDetail, AxiosError, { postId: string }>({
    mutationFn: ({ postId }) => like(postId),
    onSuccess: (_data, variables) => {
      // 관련 쿼리를 무효화해서 서버 최신값으로 다시 가져오기
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

export default useLike;
