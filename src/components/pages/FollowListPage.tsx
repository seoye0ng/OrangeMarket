'use client';

import '@/__mock__';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import InfiniteScrollLoader from '@/components/common/loading/InfiniteScrollLoader';
import UserCard from '@/components/common/post-item/user-card/UserCard';
import FollowButton from '@/components/follow/FollowButton';
import { FOLLOW_LIST_LIMIT } from '@/constants/infiniteScrollLimits';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useFollow from '@/queries/follow/useFollow';
import useInfiniteFollowList from '@/queries/follow/useInfiniteFollowList';
import useUnFollow from '@/queries/follow/useUnFollow';

function getFollowListType(
  rawFollowListType: string,
): 'follower' | 'following' {
  return rawFollowListType === 'follower' || rawFollowListType === 'following'
    ? rawFollowListType
    : 'following';
}

export default function FollowListPage() {
  const pathname = usePathname();
  const [accountName, rawFollowListType] = pathname
    .replace(/^\//, '')
    .split('/');
  const followListType = getFollowListType(rawFollowListType);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteFollowList({
      accountName,
      followListType,
      limit: FOLLOW_LIST_LIMIT,
    });

  const { mutate: follow } = useFollow();
  const { mutate: unfollow } = useUnFollow();

  const { ref } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetching: isFetchingNextPage,
  });

  const [userFollowStatus, setUserFollowStatus] = useState<
    Record<string, boolean>
  >({});

  const handleFollowClick = (
    followAccountName: string,
    isFollowed: boolean,
  ) => {
    setUserFollowStatus((prev) => ({
      ...prev,
      [followAccountName]: !isFollowed,
    }));

    if (isFollowed) return unfollow({ accountName: followAccountName });

    return follow({ accountName: followAccountName });
  };

  return (
    <main className="px-4 pt-6">
      <ul className="flex flex-col gap-4">
        {data?.pages.map((page) =>
          page.map((user) => {
            const isFollowed =
              userFollowStatus[user.accountname] ?? user.isfollow;

            return (
              <UserCard imageSize="50px" userProfile={user} key="user._id">
                <FollowButton
                  isFollow={isFollowed}
                  onClick={() =>
                    handleFollowClick(user.accountname, isFollowed)
                  }
                />
              </UserCard>
            );
          }),
        )}
      </ul>
      <InfiniteScrollLoader
        refCallback={ref}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </main>
  );
}
