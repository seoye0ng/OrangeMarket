import { getRequest } from '@/api/requests';
import { IProfileResponse } from '@/api/types/user';

/* --- profile GET 요청 --- */
export const profile = async (accountname: string) => {
  const response = await getRequest<IProfileResponse>(
    `/profile/${accountname}`,
  );
  return response;
};
