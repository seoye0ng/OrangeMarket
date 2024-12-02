'use client';

import '@/__mock__';

import { Spinner } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { CustomButton } from '@/components/common/button';
import UserCard from '@/components/common/post-item/user-card/UserCard';
import useInfiniteFollowList from '@/hooks/queries/follow/useInfiniteFollowList';

const FOLLOW_LIST_LIMIT = 20;
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

  const { ref, inView } = useInView();

  // 요소가 뷰포트에 들어오면 다음 페이지 가져오기
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <main className="px-4 pt-6">
      <ul className="flex flex-col gap-4">
        {data?.pages.map((page) =>
          page.map((user) => (
            <UserCard imageSize="50px" userProfile={user} key="user._id">
              <CustomButton
                color={user.isfollow ? 'white' : 'primary'}
                size="s"
              >
                {user.isfollow ? '취소' : '팔로우'}
              </CustomButton>
            </UserCard>
          )),
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
