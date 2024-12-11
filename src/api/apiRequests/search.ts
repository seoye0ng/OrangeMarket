import { getRequest } from '@/api/requests';
import { ISearchUser } from '@/api/types/user';

/* --- search GET 요청 --- */
export const search = async (keyword: string) => {
  const response = await getRequest<ISearchUser>(
    `/user/searchuser/?keyword=${keyword}`,
  );
  return response;
};
