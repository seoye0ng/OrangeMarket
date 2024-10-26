'use client';

import { commentList } from '@/__mock__/commentList';
import { postList } from '@/__mock__/postList';
import CommentForm from '@/components/common/form/comment-form/CommentForm';
import CommentCard from '@/components/common/post-item/comment-card/CommentCard';
import PostItem from '@/components/common/post-item/PostItem';

const { author, ...post } = postList.post[0];
const comments = commentList['comments'];

export default function PostDetailsPage() {
  const handleComment = (commentTerm: string) => {
    console.log('input ref', commentTerm);
    // 게시글의 댓글 commentCount가 1이상일 경우 comment api 호출
  };

  return (
    <main className="relative pb-20 pt-5 shadow-test3">
      <PostItem author={author} post={post} className="px-4" />
      {/* TODO: commentCount가 1이상일 경우 렌더링되도록 구현하기 */}
      <section className="border-t-1 border-gray-100 px-4 pt-5">
        {comments.map(({ author, ...comment }) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            user={author}
            className="mb-4"
          />
        ))}
      </section>
      <CommentForm
        className="fixed bottom-0 z-100 w-full px-4 py-13px"
        onComment={handleComment}
      />
    </main>
  );
}
