'use client';

import '@/__mock__';

import { Spinner } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UserCard from '@/components/common/post-item/user-card/UserCard';
import FollowButton from '@/components/follow/FollowButton';
import { FOLLOW_LIST_LIMIT } from '@/constants/infiniteScrollLimits';
import useFollow from '@/hooks/queries/follow/useFollow';
import useInfiniteFollowList from '@/hooks/queries/follow/useInfiniteFollowList';
import useUnFollow from '@/hooks/queries/follow/useUnFollow';

const getFollowListType = (
  rawFollowListType: string,
): 'follower' | 'following' =>
  rawFollowListType === 'follower' || rawFollowListType === 'following'
    ? rawFollowListType
    : 'following';

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

  const { ref, inView } = useInView();

  const [userFollowStatus, setUserFollowStatus] = useState<
    Record<string, boolean>
  >({});

  // 요소가 뷰포트에 들어오면 다음 페이지 가져오기
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
      {/* 스크롤 로딩 처리 */}
      {hasNextPage && (
        <div ref={ref} className="pb-14">
          {isFetchingNextPage ? (
            <Spinner color="primary" size="lg" />
          ) : (
            '스크롤 내리기'
          )}
        </div>
      )}
    </main>
  );
}
