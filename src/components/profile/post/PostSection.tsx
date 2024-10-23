'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { IPostList } from '@/api/types/post';
import { PostContent } from '@/components/common/post-item/post-card';
import { IconSwitcher } from './IconSwitcher';
import PostItem from '@/components/common/post-item/PostItem';

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
      {postType === 'list' && (
        <div className="px-4 pb-20 pt-4">
          {postList.post.map(({ author, ...post }) => (
            <PostItem author={author} post={post} />
          ))}
        </div>
      )}
      {postType === 'album' && (
        <div className="grid grid-cols-3 gap-2 pb-20 pt-4 shadow-test1">
          {postList.post
            .filter((post) => post.image)
            .map(({ author, ...post }) => (
              <PostContent isListType={false} image={post.image} />
            ))}
        </div>
      )}
    </section>
  );
}
