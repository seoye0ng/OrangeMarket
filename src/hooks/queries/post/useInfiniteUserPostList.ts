import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

import { userPostList } from '@/api/apiRequests/post';
import { IPostList } from '@/api/types/post';

function useInfiniteUserPostList(accountName: string, limit: number) {
  return useInfiniteQuery<IPostList>({
    queryKey: ['userPostList', accountName, limit],
    queryFn: ({ pageParam = 0 }) =>
      userPostList(accountName, limit, pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.posts.length < limit) {
        return undefined;
      }
      const nextPageParam = allPages.length * limit;
      return nextPageParam;
    },
    initialPageParam: 0,
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });
}

export default useInfiniteUserPostList;