import classNames from 'classnames';

import { IPostWithoutAuthor } from '@/api/types/post';
import { IUserProfile } from '@/api/types/user';
import SMore from '@/components/icons/SMore';

import UserCard from './user-card/UserCard';
import IconButton from '../button/IconButton';
import PostCard from './post-card/PostCard';

interface IPostItemProps {
  author: IUserProfile;
  post: IPostWithoutAuthor;
  className?: string;
}

export default function PostItem({ author, post, className }: IPostItemProps) {
  return (
    <article key={post.id} className={classNames('mb-5', className)}>
      <UserCard imageSize="42px" userProfile={author}>
        <IconButton icon={SMore} className="self-start" label="더보기 버튼" />
      </UserCard>
      <PostCard post={post} postCardClassName="ml-[54px]" />
    </article>
  );
}
