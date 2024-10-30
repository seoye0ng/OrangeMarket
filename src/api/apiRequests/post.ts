import { getRequest } from '@/api/requests';
import { IPostList, IPostDetail } from '@/api/types/post';

export const postList = async (limit: number, skip: number) => {
  const response = await getRequest<IPostList>(
    `/post/feed/?limit=${limit}&skip=${skip}`,
  );

  return response;
};

export const postDetail = async (PostId: string) => {
  const response = await getRequest<IPostDetail>(`/post/:${PostId}`);

  return response;
};
