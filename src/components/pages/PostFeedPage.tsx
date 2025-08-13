/* eslint-disable react/no-array-index-key */

'use client';

import '@/__mock__';

import TopButton from '@/components/common/button/TopButton';
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
    <main className="mt-5 px-4 pb-20">
      {data?.pages.map((page) =>
        page.posts.map((post) => <PostItem key={post.id} post={post} />),
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
