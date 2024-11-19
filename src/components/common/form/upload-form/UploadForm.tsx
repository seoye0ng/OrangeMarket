import { useFormContext } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';

export default function UploadForm() {
  // useFormContext의 타입 지정
  const { register } = useFormContext<IUploadPostRequest>();

  return (
    <form>
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
