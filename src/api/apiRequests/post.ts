import { getRequest } from '@/api/requests';
import { IPostList } from '@/api/types/post';

export const postList = async (limit: number, skip: number) => {
  const response = await getRequest<IPostList>(
    `/post/feed/?limit=${limit}&skip=${skip}`,
  );

  return response;
};
