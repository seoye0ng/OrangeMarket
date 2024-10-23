'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { IPostList } from '@/api/types/post';
import { IconSwitcher } from './IconSwitcher';
import { PostAlbumView, PostListView } from './PostView';

interface IPostSection {
  className?: string;
  postList: IPostList;
}

export default function PostSection({ className, postList }: IPostSection) {
  const [postType, setPostType] = useState<'list' | 'album'>('list');

  return (
    <section className={classNames('', className)}>
      <IconSwitcher
        postType={postType}
        onListClick={() => setPostType('list')}
        onAlbumClick={() => setPostType('album')}
      />
      {postType === 'list' && <PostListView postList={postList} />}
      {postType === 'album' && <PostAlbumView postList={postList} />}
    </section>
  );
}
