import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { uploadProduct } from '@/api/apiRequests/product';
import {
  IUploadProductRequest,
  IUploadProductResponse,
} from '@/api/types/product';

function useUploadProduct() {
  const onSuccess = () => {
    console.log('success');
  };

  const onError = (error: AxiosError) => {
    console.error(error);
  };

  return useMutation<IUploadProductResponse, AxiosError, IUploadProductRequest>(
    {
      mutationFn: uploadProduct,
      onSuccess,
      onError,
    },
  );
}

export default useUploadProduct;
