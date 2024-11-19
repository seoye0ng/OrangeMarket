import { useFormContext } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';

interface UploadFormProps {
  onSubmit: (data: IUploadPostRequest) => void;
}

export default function UploadForm({ onSubmit }: UploadFormProps) {
  // useFormContext의 타입 지정
  const { register, handleSubmit } = useFormContext<IUploadPostRequest>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('post.content', { required: '게시글을 입력해주세요.' })}
        placeholder="게시글 입력하기"
      />
      <input
        {...register('post.image')}
        accept="image/jpg, image/jpeg, image/png, image/gif"
        type="file"
      />
    </form>
  );
}
