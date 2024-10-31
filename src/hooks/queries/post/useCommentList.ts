/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';

import { commentList } from '@/api/apiRequests/post';

function useCommentList(
  postId: string,
  options?: { enabled?: boolean; initialData?: any },
) {
  return useQuery({
    queryKey: ['commentsList', postId],
    queryFn: () => commentList(postId),
    ...options, // options를 spread하여 추가 설정을 적용
  });
}

export default useCommentList;
