/* eslint-disable react/no-array-index-key */

'use client';

import classNames from 'classnames';
import { useState } from 'react';

import EmptyState from '@/components/common/empty-state/EmptyState';
import InfiniteScrollLoader from '@/components/common/loading/InfiniteScrollLoader';
import { USER_POSTS_LIMIT } from '@/constants/infiniteScrollLimits';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useInfiniteUserPostList from '@/queries/post/useInfiniteUserPostList';

import PostView from '../components/post/PostView';
import ViewSwitcher from '../components/post/ViewSwitcher';

interface IPostSection {
  accountName: string;
  className?: string;
}

export default function PostContainer({
  className,
  accountName,
}: IPostSection) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteUserPostList(accountName, USER_POSTS_LIMIT);

  const { ref } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetching: isFetchingNextPage,
  });

  const [postView, setPostView] = useState<'list' | 'album'>('list');

  const handlePostView = (view: 'list' | 'album') => {
    if (view !== postView) {
      setPostView(view);
    }
  };

  const isEmpty =
    data?.pages.every((page) => (page.posts ?? []).length === 0) ?? true;

  return (
    <section className={classNames(className)}>
      <ViewSwitcher postView={postView} onSwitch={handlePostView} />
      {isEmpty ? (
        <EmptyState
          className="pt-16 text-center"
          description="게시글이 없습니다."
        />
      ) : (
        <>
          <div className="px-4 pb-20 pt-4">
            {data?.pages.map((page, i) => (
              <PostView key={i} postList={page} postView={postView} />
            ))}
          </div>
          <InfiniteScrollLoader
            refCallback={ref}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
          />
        </>
      )}
    </section>
  );
}
