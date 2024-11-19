import { getRequest, postRequest } from '@/api/requests';
import {
  ICommentList,
  ICommentRequest,
  ICommentResponse,
} from '@/api/types/comment';

/* --- 댓글 리스트 GET 요청 --- */
export const commentList = async (postId: string) => {
  const response = await getRequest<ICommentList>(`/post/${postId}/comments`);

  return response;
};

/* --- 댓글 POST 요청 --- */
export const createComment = async (postId: string, data: ICommentRequest) => {
  console.log(postId, data);
  const response = await postRequest<ICommentResponse, ICommentRequest>(
    `/post/${postId}/comments`,
    data,
  );

  return response;
};
