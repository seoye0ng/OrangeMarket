import { useQuery } from '@tanstack/react-query';

import { commentList } from '@/api/apiRequests/comment';
import { commentKeys } from '@/queries/comment/commentKeys';

function useCommentList(postId: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: commentKeys.list(postId),
    queryFn: () => commentList(postId),
    ...options, // options를 spread하여 추가 설정을 적용
  });
}

export default useCommentList;
