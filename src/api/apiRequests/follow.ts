import { deleteRequest, postRequest } from '@/api/requests';
import { IFollowResponse } from '@/api/types/follow';

/* --- 팔로우 POST 요청 --- */
export const follow = async (accountName: string) => {
  const response = await postRequest<IFollowResponse>(
    `/profile/${accountName}/follow`,
  );

  return response;
};

/* --- 언팔로우 DELETE 요청 --- */
export const unfollow = async (accountName: string) => {
  const response = await deleteRequest<IFollowResponse>(
    `/profile/${accountName}/unfollow`,
  );

  return response;
};
