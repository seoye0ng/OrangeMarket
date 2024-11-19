'use client';

import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import UploadForm from '@/components/common/form/upload-form/UploadForm';
import { useHeaderContext } from '@/context/provider/headerContext';

export default function UploadPage() {
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();
  const methods = useForm({
    defaultValues: {
      post: {
        content: '',
        image: '',
      },
    },
  });

  const onSubmit = (data: IUploadPostRequest) => {
    console.log(isHeaderClick);
    console.log(data); // 제출된 폼 데이터 출력
  };

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
