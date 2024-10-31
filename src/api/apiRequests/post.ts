import { getRequest } from '@/api/requests';
import { ICommentList } from '@/api/types/comment';
import { IPostList, IPostDetail } from '@/api/types/post';

/* --- 피드 리스트 GET 요청 --- */
export const postList = async (limit: number, skip: number) => {
  const response = await getRequest<IPostList>(
    `/post/feed/?limit=${limit}&skip=${skip}`,
  );

  return response;
};

/* --- 게시물 상세 GET 요청 --- */
export const postDetail = async (postId: string) => {
  const response = await getRequest<IPostDetail>(`/post/${postId}`);

  return response;
};

/* --- 댓글 리스트 GET 요청 --- */
export const commentList = async (postId: string) => {
  const response = await getRequest<ICommentList>(`/post/${postId}/comments`);

  return response;
};
