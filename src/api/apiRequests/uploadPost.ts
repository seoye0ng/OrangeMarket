import { postRequest } from '@/api/requests';
import { IUploadPostRequest, IPostDetail } from '@/api/types/post';

export const uploadPost = async (data: IUploadPostRequest) => {
  const response = await postRequest<IPostDetail, IUploadPostRequest>(
    '/post',
    data,
  );

  return response;
};
