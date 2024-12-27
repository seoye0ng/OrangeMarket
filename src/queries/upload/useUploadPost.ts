import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { uploadPost } from '@/api/apiRequests/uploadPost';
import { IPostDetail, IUploadPostRequest } from '@/api/types/post';

function useUploadPost() {
  const onSuccess = () => {
    console.log('success');
  };

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<IPostDetail, AxiosError, IUploadPostRequest>({
    mutationFn: uploadPost,
    onSuccess,
    onError,
  });
}

export default useUploadPost;
