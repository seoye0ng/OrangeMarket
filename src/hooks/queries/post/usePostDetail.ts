import { useQuery } from '@tanstack/react-query';

import { postDetail } from '@/api/apiRequests/post';
import { postKeys } from '@/queries/post/postKeys';

function usePostDetail(postId: string) {
  return useQuery({
    queryKey: postKeys.detail(postId),
    queryFn: () => postDetail(postId),
  });
}

export default usePostDetail;
