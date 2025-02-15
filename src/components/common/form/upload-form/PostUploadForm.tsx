import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import { useAutoResizeHeight } from '@/hooks/useAutoResizeHeight';

import ImageUploadField from './ImageUploadField';

interface IUploadFormProps {
  className?: string;
}

export default function PostUploadForm({ className }: IUploadFormProps) {
  // useFormContext의 타입 지정
  const { register } = useFormContext<IUploadPostRequest>();

  const { elementRef, throttledResize } =
    useAutoResizeHeight<HTMLTextAreaElement>(200);

  return (
    <form className={classNames('flex flex-col gap-4', className)}>
      <textarea
        {...register('post.content', {
          required: '게시글을 입력해주세요.',
        })}
        placeholder="게시글 입력하기..."
        className="scrollbar-hidden w-full resize-none text-14px focus:outline-none"
        ref={(e) => {
          register('post.content').ref(e); // React Hook Form의 ref
          elementRef.current = e; // useAutoResizeHeight의 ref
        }}
        onInput={throttledResize}
        rows={1} // 최소 높이
      />
      <ImageUploadField
        name="post.image"
        previewImageClassName="h-56"
        imageInputClassName="mt-auto shrink-0 self-end"
      />
    </form>
  );
}
