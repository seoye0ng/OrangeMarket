import ImageInput from '@/components/common/input/ImageInput';
import Text from '@/components/common/text/Text';
import { productFields } from '@/config/uploadFieldConfig';
import { usePreviewImage } from '@/hooks/usePreviewImage';

import FieldsLayout from '../auth-form/FieldsLayout';
import PreviewImage from '../preview-image/PreviewImage';

export default function ProductUploadForm() {
  const { preview } = usePreviewImage();

  return (
    <form>
      <FieldsLayout fields={productFields}>
        <Text size="12px" color="gray-300" className="mr-auto">
          이미지 등록
        </Text>
        <div className="relative h-[204px] w-full rounded-10px bg-gray-100">
          {preview && <PreviewImage previewUrl={preview} className="h-full" />}
          <ImageInput
            inputSize="s"
            className="absolute bottom-3 right-3 z-10"
          />
        </div>
      </FieldsLayout>
    </form>
  );
}
