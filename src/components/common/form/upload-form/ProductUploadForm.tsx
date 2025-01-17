import Text from '@/components/common/text/Text';
import { productFields } from '@/config/uploadFieldConfig';

import ImageUploadField from './ImageUploadField';
import FieldsLayout from '../auth-form/FieldsLayout';

interface IProductUploadFormProps {
  className?: string;
}

export default function ProductUploadForm({
  className,
}: IProductUploadFormProps) {
  return (
    <form className={className}>
      <FieldsLayout fields={productFields} prefix="product">
        <Text size="12px" color="gray-300" className="mr-auto">
          이미지 등록
        </Text>
        <div className="relative h-[204px] w-full rounded-10px bg-gray-100">
          <ImageUploadField
            name="product.itemImage"
            imageInputClassName="absolute bottom-3 right-3 z-10"
            inputSize="s"
          />
        </div>
      </FieldsLayout>
    </form>
  );
}
