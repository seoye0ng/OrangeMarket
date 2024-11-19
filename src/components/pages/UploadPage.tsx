'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import UploadForm from '@/components/common/form/upload-form/UploadForm';

export default function UploadPage() {
  const methods = useForm({
    defaultValues: {
      post: {
        content: '',
        image: '',
      },
    },
  });

  const onSubmit = (data: IUploadPostRequest) => {
    console.log(data); // 제출된 폼 데이터 출력
  };

  return (
    <FormProvider {...methods}>
      <UploadForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
