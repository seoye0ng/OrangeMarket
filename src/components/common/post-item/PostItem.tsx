import classNames from 'classnames';

import { IPost } from '@/api/types/post';
import SMore from '@/components/icons/SMore';

import UserCard from './user-card/UserCard';
import IconButton from '../button/IconButton';
import PostCard from './post-card/PostCard';

interface IPostItemProps {
  post: IPost;
  className?: string;
}

export default function PostItem({ post, className }: IPostItemProps) {
  const { author, ...postContent } = post;

  return (
    <article key={post.id} className={classNames('mb-5', className)}>
      <UserCard imageSize="42px" userProfile={author}>
        <IconButton icon={SMore} className="self-start" label="더보기 버튼" />
      </UserCard>
      <PostCard post={postContent} className="ml-[54px]" />
    </article>
  );
}
