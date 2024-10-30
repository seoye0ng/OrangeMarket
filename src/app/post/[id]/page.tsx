'use client';

import '@/__mock__/';
import { commentList } from '@/__mock__/commentList';
import CommentForm from '@/components/common/form/comment-form/CommentForm';
import CommentCard from '@/components/common/post-item/comment-card/CommentCard';
import PostItem from '@/components/common/post-item/PostItem';
import usePostDetail from '@/hooks/queries/post/usePostDetail';

interface PostDetailPageProps {
  params: { id: string };
}

export default function PostDetailsPage({ params }: PostDetailPageProps) {
  const { id } = params; // URL의 id 파라미터 추출

  const { data: postDetail, isLoading, error } = usePostDetail(id);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleComment = (commentTerm: string) => {
    console.log('input ref', commentTerm);
    // 새 댓글이 추가되면 CommentCard가 다시 렌더링이 되어야 함.
    // TODO: 이때 CommentList를 다시 불러와야하고 이렇게 되면 기존의 CommentCard들이 싹 리렌더링이 됨 -> CommentCard를 React.memo로 감싸서 불필요한 리렌더링을 방지
  };

  return (
    postDetail && (
      <main className="relative pb-20 pt-5">
        <PostItem post={postDetail.post} className="px-4" />
        {postDetail.post.commentCount > 0 && (
          <section className="border-t-1 border-gray-100 px-4 pt-5">
            {commentList.comments.map(
              ({ author: commentAuthor, ...comment }) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  user={commentAuthor}
                  className="mb-4"
                />
              ),
            )}
          </section>
        )}
        <CommentForm
          className="fixed bottom-0 z-100 w-full px-4 py-13px"
          onComment={handleComment}
        />
      </main>
    )
  );
}
