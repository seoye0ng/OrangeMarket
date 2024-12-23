import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

import { followList } from '@/api/apiRequests/followList';
import { IFollowList } from '@/api/types/follow';
import { followKeys } from '@/queries/follow/followKeys';

interface IFollowListProps {
  accountName: string;
  followListType: 'following' | 'follower';
  limit: number;
}

function useInfiniteFollowList({
  accountName,
  followListType,
  limit,
}: IFollowListProps) {
  return useInfiniteQuery<IFollowList>({
    queryKey: followKeys.list({
      type: followListType,
      accountName,
      limit,
    }),
    queryFn: ({ pageParam = 0 }) =>
      followList(accountName, followListType, limit, pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) {
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

export default useInfiniteFollowList;
