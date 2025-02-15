'use client';

import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import PostUploadForm from '@/components/common/form/upload-form/PostUploadForm';
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
      console.log('Data:', data);
      uploadPost(data);
    },
    [uploadPost],
  );

  useEffect(() => {
    console.log('useEffect:', isHeaderClick);
    if (isHeaderClick) {
      methods.handleSubmit(onSubmit)();
      setIsHeaderClick(false);
    }
  }, [isHeaderClick, methods, onSubmit, setIsHeaderClick]);

  return (
    <main className="h-calc-header-screen flex gap-[13px] p-4">
      <FormProvider {...methods}>
        <UserImage className="shadow-test1" />
        <PostUploadForm className="h-full flex-grow" />
      </FormProvider>
    </main>
  );
}
