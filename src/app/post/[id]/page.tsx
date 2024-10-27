'use client';

import { commentList } from '@/__mock__/commentList';
import { postList } from '@/__mock__/postList';
import CommentForm from '@/components/common/form/comment-form/CommentForm';
import CommentCard from '@/components/common/post-item/comment-card/CommentCard';
import PostItem from '@/components/common/post-item/PostItem';

const { author, ...post } = postList.post[0];
const { comments } = commentList;

export default function PostDetailsPage() {
  /* TODO: 게시글을 불러오는 쿼리 훅을 연결해 `post` 데이터를 가져옴.
  post.commentCount가 1 이상인지 확인해서, 댓글이 있을 때만 comment 쿼리 훅을 실행하도록 설정. */

  const handleComment = (commentTerm: string) => {
    console.log('input ref', commentTerm);
    // 새 댓글이 추가되면 CommentCard가 다시 렌더링이 되어야 함.
    // TODO: 이때 CommentList를 다시 불러와야하고 이렇게 되면 기존의 CommentCard들이 싹 리렌더링이 됨 -> CommentCard를 React.memo로 감싸서 불필요한 리렌더링을 방지
  };

  return (
    <main className="relative pb-20 pt-5">
      <PostItem author={author} post={post} className="px-4" />
      {post.commentCount > 0 && (
        <section className="border-t-1 border-gray-100 px-4 pt-5">
          {comments.map(({ author: commentAuthor, ...comment }) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              user={commentAuthor}
              className="mb-4"
            />
          ))}
        </section>
      )}
      <CommentForm
        className="fixed bottom-0 z-100 w-full px-4 py-13px"
        onComment={handleComment}
      />
    </main>
  );
}
