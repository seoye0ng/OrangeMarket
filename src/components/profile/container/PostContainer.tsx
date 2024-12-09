/* eslint-disable react/no-array-index-key */

'use client';

import { Spinner } from '@nextui-org/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useInfiniteUserPostList from '@/hooks/queries/post/useInfiniteUserPostList';

import { IconSwitcher } from '../components/post/IconSwitcher';
import { PostAlbumView, PostListView } from '../components/post/PostView';

interface IPostSection {
  accountName: string;
  className?: string;
}
const POSTS_LIMIT = 12;

export default function PostContainer({
  className,
  accountName,
}: IPostSection) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteUserPostList(accountName, POSTS_LIMIT);
  const { ref, inView } = useInView();

  const [postType, setPostType] = useState<'list' | 'album'>('list');

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handlePostType = (type: 'list' | 'album') => {
    if (type === postType) return;
    setPostType(type);
  };

  return (
    <section className={classNames('', className)}>
      <IconSwitcher postType={postType} onSwitch={handlePostType} />
      <div className="px-4 pb-20 pt-4">
        {postType === 'list' &&
          data?.pages.map((page) => <PostListView postList={page} />)}
        {postType === 'album' &&
          data?.pages.map((page, i) => (
            <PostAlbumView key={i} postList={page} />
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
