'use client';

import TopButton from '@/components/common/button/TopButton';
import EmptyState from '@/components/common/empty-state/EmptyState';
import InfiniteScrollLoader from '@/components/common/loading/InfiniteScrollLoader';
import PostItem from '@/components/common/post-item/PostItem';
import { POSTS_LIMIT } from '@/constants/infiniteScrollLimits';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useInfinitePostList from '@/queries/post/useInfinitePostList';

export default function PostFeedPage() {
  // 무한 스크롤 구현
  const {
    data,
    // error,
    // isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePostList(POSTS_LIMIT);

  const { ref } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetching: isFetchingNextPage,
  });

  // TODO: 로딩 시 처리
  // if (isLoading) return <div>Loading...</div>;

  // TODO: 에러 시 처리
  // if (error) return <div>{error.message}</div>;

  return (
    <main className="h-screen px-4 pb-20 pt-5">
      {data?.pages.every((page) => page.posts.length === 0) ? (
        <EmptyState
          className="items-center justify-center gap-2 text-center text-gray-500"
          title="팔로잉 목록이 없습니다."
          description="유저를 팔로우하여 피드를 채워보세요!"
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
