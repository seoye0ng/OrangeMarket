import { useFormContext } from 'react-hook-form';

import ImageInput from '@/components/common/input/ImageInput';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import { profileFields } from '@/config/authFieldConfig';
import { usePreviewImage } from '@/hooks/usePreviewImage';

import FieldsLayout from './FieldsLayout';

export default function ProfileFields() {
  const { register, setValue } = useFormContext();
  const { preview, addImage } = usePreviewImage(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      setValue('user.image', imageFile.name);
      addImage(imageFile);
    }
  };

  return (
    <FieldsLayout fields={profileFields}>
      <div className="relative">
        <UserImage size="110px" link={false} src={preview[0]} />
        <ImageInput
          inputSize="s"
          {...register('user.image', {
            onChange: handleImageChange,
          })}
          className="absolute bottom-0 right-0"
        />
      </div>
    </FieldsLayout>
  );
}
