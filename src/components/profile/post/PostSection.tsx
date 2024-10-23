'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { IPostList } from '@/api/types/post';
import IconButton from '@/components/common/button/IconButton';
import { PostCard, PostContent } from '@/components/common/post-card';
import UserCard from '@/components/common/user-card/UserCard';
import PostList from '@/components/icons/PostList';
import PostAlbum from '@/components/icons/PostAlbum';
import SMore from '@/components/icons/SMore';
import { IconColor } from '@/styles/token';

interface IPostSection {
  className?: string;
  postList: IPostList;
}

const getIconColor = (currentType: string, targetType: string): IconColor => {
  return currentType === targetType ? 'gray-300' : 'gray-100';
};

export default function PostSection({ className, postList }: IPostSection) {
  const [postType, setPostType] = useState('list');

  const handleListClick = () => {
    setPostType('list');
  };

  const handleAlbumClick = () => {
    setPostType('album');
  };

  return (
    <section className={classNames('', className)}>
      <div className="border-b-1 border-gray-100 px-4 pt-2 text-right">
        <IconButton
          className="ml-4"
          label="리스트형 아이콘"
          onClick={handleListClick}
          icon={<PostList color={getIconColor(postType, 'list')} />}
        />
        <IconButton
          className="ml-4"
          label="앨범형 아이콘"
          onClick={handleAlbumClick}
          icon={<PostAlbum color={getIconColor(postType, 'album')} />}
        />
      </div>
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
