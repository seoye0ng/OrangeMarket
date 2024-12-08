'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { IPostList } from '@/api/types/post';

import { IconSwitcher } from '../components/post/IconSwitcher';
import { PostAlbumView, PostListView } from '../components/post/PostView';

interface IPostSection {
  className?: string;
  postList: IPostList;
}

export default function PostContainer({ className, postList }: IPostSection) {
  const [postType, setPostType] = useState<'list' | 'album'>('list');

  const handlePostType = (type: 'list' | 'album') => {
    if (type === postType) return;
    console.log('change일 때만');
    setPostType(type);
  };

  return (
    <section className={classNames('', className)}>
      <IconSwitcher postType={postType} onSwitch={handlePostType} />
      {postType === 'list' && <PostListView postList={postList} />}
      {postType === 'album' && <PostAlbumView postList={postList} />}
    </section>
  );
}
