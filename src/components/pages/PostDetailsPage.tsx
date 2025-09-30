'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { IComment, ICommentRequest } from '@/api/types/comment';
import CommentForm from '@/components/common/form/comment-form/CommentForm';
import CommentCard from '@/components/common/post-item/comment-card/CommentCard';
import PostItem from '@/components/common/post-item/PostItem';
import { commentKeys } from '@/queries/comment/commentKeys';
import useCommentList from '@/queries/comment/useCommentList';
import useCreateComment from '@/queries/comment/useCreateComment';
import usePostDetail from '@/queries/post/usePostDetail';

interface PostDetailPageProps {
  postId: string;
}

export default function PostDetailsPage({ postId }: PostDetailPageProps) {
  const queryClient = useQueryClient();

  const { data: postDetail, isLoading, error } = usePostDetail(postId);
  const { mutateAsync: createComment } = useCreateComment();

  const commentCount = postDetail?.post.commentCount;

  const { data: commentsData } = useCommentList(postId, {
    enabled: !!commentCount && commentCount > 0, // commentCount가 1 이상일 때만 요청
  });

  // 로컬 상태로 관리 → 작성 즉시 반영
  const [commentList, setCommentList] = useState<IComment[]>([]);

  useEffect(() => {
    if (commentsData) setCommentList(commentsData.comments);
  }, [commentsData]);

  if (isLoading) return <p>Loading...</p>;
  if (!postDetail || error) return <p>Error: {error?.message}</p>;

  const handleAddComment = async (commentTerm: string) => {
    const data: ICommentRequest = { comment: { content: commentTerm } };
    try {
      const response = await createComment({ postId, data });
      // 로컬 상태에 즉시 추가
      setCommentList((prevComments) => [...prevComments, response.comments]);

      // 서버와 동기화
      queryClient.invalidateQueries({ queryKey: commentKeys.list(postId) });

      console.log('댓글 작성 성공:', response);
    } catch (err) {
      console.error('댓글 작성 오류:', err);
    }
  };

  return (
    <main className="relative pb-20 pt-5">
      <PostItem post={postDetail.post} className="px-4" />
      {commentList && (
        <section className="border-t-gray px-4 pt-5">
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
