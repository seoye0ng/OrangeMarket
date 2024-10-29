import { useQuery } from '@tanstack/react-query';

import { postList } from '@/api/apiRequests/post';

function usePostList(limit: number, skip: number) {
  return useQuery({
    queryKey: ['postList', limit, skip],
    queryFn: () => postList(limit, skip),
  });
}

export default usePostList;
