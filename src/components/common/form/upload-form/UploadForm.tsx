import classNames from 'classnames';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';

interface IUploadFormProps {
  className?: string;
}

export default function UploadForm({ className }: IUploadFormProps) {
  // useFormContext의 타입 지정
  const { register } = useFormContext<IUploadPostRequest>();

  return (
    <form className={classNames('flex flex-col gap-4', className)}>
      <textarea
        {...register('post.content', { required: '게시글을 입력해주세요.' })}
        placeholder="게시글 입력하기..."
        className="scrollbar-hidden w-full resize-none text-14px focus:outline-none"
        rows={1} // 최소 높이
      />
      <label
        htmlFor="postImage"
        className="relative mt-auto h-12 w-12 shrink-0 cursor-pointer self-end"
      >
        <Image
          src="/assets/icons/icon-upload-file.svg"
          alt="사진 첨부 아이콘"
          fill
          className="object-cover"
        />
      </label>
      <input
        {...register('post.image')}
        accept="image/jpg, image/jpeg, image/png, image/gif"
        type="file"
        id="postImage"
        className="hidden"
      />
    </form>
  );
}
