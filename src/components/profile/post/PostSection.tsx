'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { IPostList } from '@/api/types/post';
import IconButton from '@/components/common/button/IconButton';
import { PostCard, PostContent } from '@/components/common/post-card';
import UserCard from '@/components/common/user-card/UserCard';
import SMore from '@/components/icons/SMore';
import { IconSwitcher } from './IconSwitcher';

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
            <article key={post.id} className="mb-5">
              <UserCard imageSize="42px" userProfile={author}>
                <IconButton
                  icon={SMore}
                  className="self-start"
                  label="더보기 버튼"
                />
              </UserCard>
              <PostCard post={post} postCardClassName="ml-[54px]" />
            </article>
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
