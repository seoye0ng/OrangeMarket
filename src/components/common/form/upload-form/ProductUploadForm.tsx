import { useFormContext } from 'react-hook-form';

import ImageInput from '@/components/common/input/ImageInput';
import Text from '@/components/common/text/Text';
import { productFields } from '@/config/uploadFieldConfig';
import { usePreviewImage } from '@/hooks/usePreviewImage';

import FieldsLayout from '../auth-form/FieldsLayout';
import PreviewImage from '../preview-image/PreviewImage';

interface IProductUploadFormProps {
  className?: string;
}

export default function ProductUploadForm({
  className,
}: IProductUploadFormProps) {
  const { setValue } = useFormContext();

  const { preview, addImage, deleteImage } = usePreviewImage();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      setValue('product.image', imageFile.name);
      addImage(imageFile);
    }
  };

  return (
    <form className={className}>
      <FieldsLayout fields={productFields} prefix="product">
        <Text size="12px" color="gray-300" className="mr-auto">
          이미지 등록
        </Text>
        <div className="relative h-[204px] w-full rounded-10px bg-gray-100">
          {preview && (
            <PreviewImage
              previewUrl={preview}
              onClick={deleteImage}
              className="h-full"
            />
          )}
          <ImageInput
            inputSize="s"
            className="absolute bottom-3 right-3 z-10"
            onChange={handleImageChange}
          />
        </div>
      </FieldsLayout>
    </form>
  );
}
