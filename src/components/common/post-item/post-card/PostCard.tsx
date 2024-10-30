import { IPostWithoutAuthor } from '@/api/types/post';

import PostContent from './PostContent';
import PostReaction from './PostReaction';

interface IPostCardProps {
  post: IPostWithoutAuthor;
  className?: string;
}

export default function PostCard({ post, className = '' }: IPostCardProps) {
  return (
    <article className={className}>
      <PostContent content={post.content} image={post.image} />
      <PostReaction
        hearted={post.hearted}
        heartCount={post.heartCount}
        commentCount={post.commentCount}
      />
      <p className="text-10px font-normal leading-3 text-gray-300">
        {post.updatedAt}
      </p>
    </article>
  );
}
