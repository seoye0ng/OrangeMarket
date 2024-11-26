import { useFormContext } from 'react-hook-form';

import ImageInput from '@/components/common/input/ImageInput';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import { profileFields } from '@/config/authFieldConfig';
import { usePreviewImage } from '@/hooks/usePreviewImage';

import FieldsLayout from './FieldsLayout';

export default function ProfileFields() {
  const { register } = useFormContext();
  const { addImage } = usePreviewImage();

  return (
    <FieldsLayout fields={profileFields}>
      <div className="flex h-[110px] w-[110px] items-end">
        <UserImage size="inherit" />
        <ImageInput
          {...register('user.image')}
          inputSize="s"
          onChange={addImage}
          className="shrink-0 -translate-x-full"
        />
      </div>
    </FieldsLayout>
  );
}