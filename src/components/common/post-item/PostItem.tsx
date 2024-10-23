import { IUserProfile } from '@/api/types/user';
import UserCard from './user-card/UserCard';
import IconButton from '../button/IconButton';
import PostCard from './post-card/PostCard';
import { IPostWithoutAuthor } from '@/api/types/post';
import SMore from '@/components/icons/SMore';

interface IPostItemProps {
  author: IUserProfile;
  post: IPostWithoutAuthor;
}

export default function PostItem({ author, post }: IPostItemProps) {
  return (
    <article key={post.id} className="mb-5">
      <UserCard imageSize="42px" userProfile={author}>
        <IconButton icon={SMore} className="self-start" label="더보기 버튼" />
      </UserCard>
      <PostCard post={post} postCardClassName="ml-[54px]" />
    </article>
  );
}
