import { useFormContext } from 'react-hook-form';

import PreviewImage from '@/components/common/form/preview-image/PreviewImage';
import ImageInput from '@/components/common/input/ImageInput';
import { usePreviewImage } from '@/hooks/usePreviewImage';

interface ImageUploadFieldProps {
  name: string;
  previewImageClassName?: string;
  imageInputClassName?: string;
  inputSize?: 's' | 'm';
}

export default function ImageUploadField({
  name,
  previewImageClassName,
  imageInputClassName,
  inputSize = 'm',
}: ImageUploadFieldProps) {
  const { setValue } = useFormContext();

  const { preview, addImage, deleteImage } = usePreviewImage();

  //   TODO: 이미지 삭제시 코드도 구현
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      setValue('product.itemImage', imageFile.name);
      addImage(imageFile);
    }
  };

  return (
    <>
      {/* TODO preview 이미지 여러개일 때 css 구현 */}
      {preview && (
        <div className="h-full w-full">
          {preview.map((url, i) => (
            <PreviewImage
              key={url}
              previewUrl={url}
              onClick={() => deleteImage(i)}
              className={previewImageClassName}
            />
          ))}
        </div>
      )}
      <ImageInput
        name={name}
        onChange={handleImageChange}
        inputSize={inputSize}
        className={imageInputClassName}
      />
    </>
  );
}
