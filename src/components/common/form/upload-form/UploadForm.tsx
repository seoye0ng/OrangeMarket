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
  const { setValue, register } = useFormContext<IUploadPostRequest>();

  const { preview, addImage, deleteImage } = usePreviewImage();
  const { elementRef, throttledResize } =
    useAutoResizeHeight<HTMLTextAreaElement>(200);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0]; // 첫 번째 파일만 선택
    // TODO: 이미지 파일 API 명세에 맞게 수정할 것
    if (imageFile) {
      setValue('post.image', imageFile.name); // React Hook Form 상태 업데이트
      addImage(imageFile);
    }
  };

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
        onChange={handleImageChange}
        className="mt-auto shrink-0 self-end"
      />
    </form>
  );
}
