'use client';

import { CustomButton, TopButton } from '@/components/common/button';
import EmptyState from '@/components/common/empty-state/EmptyState';
import InfiniteScrollLoader from '@/components/common/loading/InfiniteScrollLoader';
import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import PostItem from '@/components/common/post-item/PostItem';
import Logo from '@/components/icons/Logo';
import { POSTS_LIMIT } from '@/constants/infiniteScrollLimits';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useNavigate from '@/hooks/useNavigate';
import useInfinitePostList from '@/queries/post/useInfinitePostList';

export default function PostFeedPage() {
  const { goTo } = useNavigate();

  // 무한 스크롤 구현
  const {
    data,
    // error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePostList(POSTS_LIMIT);

  const { ref } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetching: isFetchingNextPage,
  });

  if (isLoading) return <LoadingSpinner />;

  // TODO: 에러 시 처리
  // if (error) return <div>{error.message}</div>;

  const isEmpty = data?.pages.every((page) => page.posts.length === 0) ?? true;

  return (
    <main className="h-calc-header-screen px-4 pb-20 pt-5">
      {isEmpty ? (
        <EmptyState
          className="items-center justify-center gap-5 text-center text-gray-500"
          icon={<Logo width={100} color="gray-100" />}
          description="유저를 팔로우하여 피드를 채워보세요!"
          action={
            <CustomButton
              type="button"
              color="primary"
              size="l"
              radius="full"
              className="px-8"
              onPress={() => goTo('/search')}
            >
              검색하기
            </CustomButton>
          }
        />
      ) : (
        data?.pages.map((page) =>
          page.posts.map((post) => <PostItem key={post.id} post={post} />),
        )
      )}
      {/* hasNextPage가 true일 때만 로딩 메시지를 표시 */}
      <InfiniteScrollLoader
        refCallback={ref}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
      <TopButton />
    </main>
  );
}
