import { getRequest } from '@/api/requests';
import { IFollowList } from '@/api/types/follow';

/* --- followList GET 요청 --- */
export const followList = async (
  accountname: string,
  followType: 'following' | 'follower',
  limit: number,
  skip: number,
) => {
  const response = await getRequest<IFollowList>(
    `/profile/${accountname}/${followType}?limit=${limit}&skip=${skip}`,
  );
  return response;
};
