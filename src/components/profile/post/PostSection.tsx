'use client';

import classNames from 'classnames';
import { useState } from 'react';

import IconButton from '@/components/common/button/IconButton';
import PostAlbum from '@/components/icons/PostAlbum';
import PostList from '@/components/icons/PostList';
import { IconColor } from '@/styles/token';

interface IPostSection {
  className?: string;
}

const getIconColor = (currentType: string, targetType: string): IconColor => {
  return currentType === targetType ? 'gray-300' : 'gray-100';
};

export default function PostSection({ className }: IPostSection) {
  const [postType, setPostType] = useState('list');

  const handleListClick = () => {
    setPostType('list');
  };

  const handleAlbumClick = () => {
    setPostType('album');
  };

  return (
    <section className={classNames('shadow-test1', className)}>
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
      {postType === 'list' && <div>list</div>}
      {postType === 'album' && <div>album</div>}
    </section>
  );
}
