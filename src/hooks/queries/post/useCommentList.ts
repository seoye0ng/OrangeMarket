import { useQuery } from '@tanstack/react-query';

import { commentList } from '@/api/apiRequests/post';

function useCommentList(postId: string) {
  return useQuery({
    queryKey: ['commentsList', postId],
    queryFn: () => commentList(postId),
  });
}

export default useCommentList;
