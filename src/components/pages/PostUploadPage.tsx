'use client';

import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import UploadForm from '@/components/common/form/upload-form/UploadForm';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import useUploadPost from '@/queries/upload/useUploadPost';

export default function PostUploadPage() {
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
    console.log('useEffect:', isHeaderClick);
    if (isHeaderClick) {
      methods.handleSubmit(onSubmit)();
    }
    return () => {
      setIsHeaderClick(false);
    };
  }, [isHeaderClick, methods, onSubmit, setIsHeaderClick]);

  return (
    <main className="h-calc-header-screen flex gap-[13px] p-4">
      <FormProvider {...methods}>
        <UserImage className="shadow-test1" />
        <UploadForm className="h-full flex-grow" />
      </FormProvider>
    </main>
  );
}
