import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

import { postList } from '@/api/apiRequests/post';
import { IPostList } from '@/api/types/post';
import { postKeys } from '@/queries/post/postKeys';

function useInfinitePostList(limit: number) {
  return useInfiniteQuery<IPostList>({
    queryKey: postKeys.listAll({ limit }),
    queryFn: ({ pageParam = 0 }) => postList(limit, pageParam as number), // pageParam을 사용하여 skip 관리
    getNextPageParam: (lastPage, allPages) => {
      // 마지막 페이지에서 받은 게시물 수가 limit보다 작으면 다음 페이지가 없으므로 undefined 반환
      if (lastPage.posts.length < limit) {
        return undefined;
      }
      // 다음 페이지가 있을 경우 pageParam(skip)을 계산하여 반환
      const nextPageParam = allPages.length * limit;
      return nextPageParam;
    },
    initialPageParam: 0, // 초기 페이지 파라미터를 0으로 설정
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });
}

export default useInfinitePostList;
