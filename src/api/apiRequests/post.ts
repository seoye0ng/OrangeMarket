import { getRequest } from '@/api/requests';
import { ICommentList } from '@/api/types/comment';
import { IPostList, IPostDetail } from '@/api/types/post';

export const postList = async (limit: number, skip: number) => {
  const response = await getRequest<IPostList>(
    `/post/feed/?limit=${limit}&skip=${skip}`,
  );

  return response;
};

export const postDetail = async (postId: string) => {
  const response = await getRequest<IPostDetail>(`/post/:${postId}`);

  return response;
};

export const commentList = async (postId: string) => {
  const response = await getRequest<ICommentList>(`/post/:${postId}/comments`);

  return response;
};
