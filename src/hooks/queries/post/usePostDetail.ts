import { useQuery } from '@tanstack/react-query';

import { postDetail } from '@/api/apiRequests/post';

function usePostDetail(postId: string) {
  return useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => postDetail(postId),
  });
}

export default usePostDetail;
