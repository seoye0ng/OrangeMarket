import { postRequest, deleteRequest } from '@/api/requests';
import { IPostDetail } from '@/api/types/post';

/* --- 좋아요 POST 요청 --- */
export const like = async (postId: string) => {
  const response = await postRequest<IPostDetail>(`/post/${postId}/heart`);

  return response;
};

/* --- 좋아요 취소 DELETE 요청 --- */
export const unLike = async (postId: string) => {
  const response = await deleteRequest<IPostDetail>(`/post/${postId}/unheart`);

  return response;
};
