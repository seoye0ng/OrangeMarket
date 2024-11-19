'use client';

import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import UploadForm from '@/components/common/form/upload-form/UploadForm';
import { useHeaderContext } from '@/context/provider/headerContext';
import useUploadPost from '@/hooks/queries/upload/useUploadPost';

export default function UploadPage() {
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();
  const { mutate: uploadPost } = useUploadPost();
  const methods = useForm({
    defaultValues: {
      post: {
        content: '',
        image: '',
      },
    },
  });

  const onSubmit = useCallback(
    (data: IUploadPostRequest) => {
      console.log('isHeaderClick:', isHeaderClick);
      console.log('Data:', data);
      uploadPost(data);
    },
    [isHeaderClick, uploadPost],
  );

  useEffect(() => {
    if (isHeaderClick) {
      methods.handleSubmit(onSubmit)();
    }
    return () => {
      setIsHeaderClick(false);
    };
  }, [isHeaderClick, methods, onSubmit, setIsHeaderClick]);

  return (
    <FormProvider {...methods}>
      <UploadForm />
    </FormProvider>
  );
}
