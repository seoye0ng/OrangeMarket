/* eslint-disable react/no-array-index-key */

'use client';

import { Spinner } from '@nextui-org/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { USER_POSTS_LIMIT } from '@/constants/infiniteScrollLimits';
import useInfiniteUserPostList from '@/hooks/queries/post/useInfiniteUserPostList';

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
  const { ref, inView } = useInView();

  const [postView, setPostView] = useState<'list' | 'album'>('list');

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handlePostView = (view: 'list' | 'album') => {
    if (view === postView) return;
    setPostView(view);
  };

  return (
    <section className={classNames(className)}>
      <ViewSwitcher postView={postView} onSwitch={handlePostView} />
      <div className="px-4 pb-20 pt-4">
        {data?.pages.map((page, i) => (
          <PostView key={i} postList={page} postView={postView} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={ref} className="pb-14">
          {isFetchingNextPage ? (
            <Spinner color="primary" size="lg" />
          ) : (
            '스크롤 내리기'
          )}
        </div>
      )}
    </section>
  );
}
