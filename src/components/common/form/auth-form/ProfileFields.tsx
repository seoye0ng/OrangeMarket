import { useFormContext } from 'react-hook-form';

import ImageInput from '@/components/common/input/ImageInput';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import { profileFields } from '@/config/authFieldConfig';
// import { usePreviewImage } from '@/hooks/usePreviewImage';

import FieldsLayout from './FieldsLayout';

export default function ProfileFields() {
  const { register } = useFormContext();
  // const { addImage } = usePreviewImage();

  //  const { addImage, deleteImage } = usePreviewImage();
  // ImageInput 컴포넌트에서 image를 가져오면 UserImage에서 렌더링 되어야 함.

  return (
    <FieldsLayout fields={profileFields}>
      <div className="relative">
        <UserImage size="110px" link={false} />
        <ImageInput
          {...register('user.image')}
          inputSize="s"
          // onChange={addImage}
          className="absolute bottom-0 right-0"
        />
      </div>
    </FieldsLayout>
  );
}
