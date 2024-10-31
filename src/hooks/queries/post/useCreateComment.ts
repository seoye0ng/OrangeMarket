import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { createComment } from '@/api/apiRequests/post';
import { ICommentResponse, ICommentRequest } from '@/api/types/comment';

function useCreateComment() {
  const onSuccess = () => {
    console.error('success');
  };

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<
    ICommentResponse,
    AxiosError,
    { postId: string; data: ICommentRequest }
  >({
    mutationFn: ({ postId, data }) => createComment(postId, data),
    onSuccess,
    onError,
  });
}

export default useCreateComment;
