'use client';

import '@/__mock__/';
import { IComment, ICommentRequest } from '@/api/types/comment';
import CommentForm from '@/components/common/form/comment-form/CommentForm';
import CommentCard from '@/components/common/post-item/comment-card/CommentCard';
import PostItem from '@/components/common/post-item/PostItem';
import useCommentList from '@/hooks/queries/post/useCommentList';
import useCreateComment from '@/hooks/queries/post/useCreateComment';
import usePostDetail from '@/hooks/queries/post/usePostDetail';
import { useEffect, useState } from 'react';

interface PostDetailPageProps {
  params: { id: string };
}

export default function PostDetailsPage({ params }: PostDetailPageProps) {
  const { id } = params; // URL의 id 파라미터 추출
  const [commentList, setCommentList] = useState<IComment[]>([]);

  const { data: postDetail, isLoading, error } = usePostDetail(id);
  const { mutateAsync: createComment } = useCreateComment();
  const commentCount = postDetail?.post.commentCount ?? 0; // 기본값을 0으로 설정
  const { data: comments } = useCommentList(id, {
    enabled: commentCount > 0, // commentCount가 1 이상일 때만 요청
    initialData: [], // 기본값을 빈 배열로 설정
  });

  useEffect(() => {
    if (comments) {
      setCommentList(comments.comments);
    }
  }, [comments]);

  if (isLoading) return <p>Loading...</p>;
  if (!postDetail || error) return <p>Error: {error?.message}</p>;

  const handleAddComment = async (commentTerm: string) => {
    console.log('input ref', commentTerm);

    const data: ICommentRequest = { comment: { content: commentTerm } };
    try {
      const response = await createComment({ postId: id, data });
      setCommentList((prevComments) => [...prevComments, response.comments]); // 댓글 목록 업데이트
    } catch (error) {
      console.error('댓글 작성 오류:', error);
    }
  };

  return (
    <main className="relative pb-20 pt-5">
      <PostItem post={postDetail.post} className="px-4" />
      {commentList && (
        <section className="border-t-1 border-gray-100 px-4 pt-5">
          {commentList.map(({ author: commentAuthor, ...comment }) => (
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
        onSubmit={handleAddComment}
      />
    </main>
  );
}
