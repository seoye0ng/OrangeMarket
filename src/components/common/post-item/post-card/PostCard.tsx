import Link from 'next/link';

import { IPostWithoutAuthor } from '@/api/types/post';
import Text from '@/components/common/text/Text';

import PostContent from './PostContent';
import PostReaction from './PostReaction';

interface IPostCardProps {
  post: IPostWithoutAuthor;
  className?: string;
}

export default function PostCard({ post, className = '' }: IPostCardProps) {
  return (
    <article className={className}>
      <Link href={`/post/${post.id}`} aria-label="게시글 상세 페이지로 이동">
        <PostContent content={post.content} image={post.image} />
      </Link>
      <PostReaction
        id={post.id}
        hearted={post.hearted}
        heartCount={post.heartCount}
        commentCount={post.commentCount}
      />
      <Text size="10px" color="gray-300">
        {post.updatedAt}
      </Text>
    </article>
  );
}
