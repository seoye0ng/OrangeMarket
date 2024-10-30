/* eslint-disable react/no-array-index-key */

'use client';

import '@/__mock__';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import PostItem from '@/components/common/post-item/PostItem';
import useInfinitePostList from '@/hooks/queries/post/useInfinitePostList';

const POSTS_LIMIT = 10; // 페이지 당 불러올 포스트 수 설정

export default function Home() {
  // 무한 스크롤 구현
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePostList(POSTS_LIMIT);
  const { ref, inView } = useInView();
  // 요소가 뷰에 들어오면 다음 페이지 데이터 가져오기
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // TODO: 로딩 시 처리
  if (isLoading) return <div>Loading...</div>;

  // TODO: 에러 시 처리
  if (error) return <div>{error.message}</div>;

  return (
    <main className="mt-5 px-4">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts.map(({ author, ...post }) => (
            <PostItem key={post.id} author={author} post={post} />
          ))}
        </React.Fragment>
      ))}
      {/* hasNextPage가 true일 때만 로딩 메시지를 표시 */}
      {hasNextPage && (
        <div ref={ref} className="pb-14">
          {isFetchingNextPage ? 'Loading...' : '스크롤 내리기'}
        </div>
      )}
    </main>
  );
}
