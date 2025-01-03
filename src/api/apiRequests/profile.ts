import { getRequest, putRequest } from '@/api/requests';
import { IEditAccountRequest, IProfileResponse } from '@/api/types/user';

/* --- profile GET 요청 --- */
export const profile = async (accountName: string) => {
  const response = await getRequest<IProfileResponse>(
    `/profile/${accountName}`,
  );
  return response;
};

/* --- edit profile PUT 요청 --- */
export const editAccount = async (data: IEditAccountRequest) => {
  const response = await putRequest<IProfileResponse, IEditAccountRequest>(
    `/user`,
    data,
  );
  return response;
};
