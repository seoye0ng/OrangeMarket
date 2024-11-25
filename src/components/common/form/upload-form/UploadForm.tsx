import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import { IUploadPostRequest } from '@/api/types/post';
import PreviewImage from '@/components/common/form/preview-image/PreviewImage';
import ImageInput from '@/components/common/input/ImageInput';
import { useAutoResizeHeight } from '@/hooks/useAutoResizeHeight';
import { usePreviewImage } from '@/hooks/usePreviewImage';

interface IUploadFormProps {
  className?: string;
}

export default function UploadForm({ className }: IUploadFormProps) {
  // useFormContext의 타입 지정
  const { register } = useFormContext<IUploadPostRequest>();
  const { preview, addImage, deleteImage } = usePreviewImage();
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
      {/* TODO: 여러개 이미지 처리하기 */}
      {preview && (
        <PreviewImage
          previewUrl={preview}
          onClick={deleteImage}
          className="h-56"
        />
      )}
      <ImageInput
        {...register('post.image')}
        onChange={addImage}
        className="shrink-0 self-end"
      />
    </form>
  );
}
