import { Button } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

import ImageInput from '@/components/common/input/ImageInput';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import { profileFields } from '@/config/authFieldConfig';
import { usePreviewImage } from '@/hooks/usePreviewImage';

import FieldsLayout from './FieldsLayout';

interface IProfileFields {
  isDisabled: boolean;
  onClick: () => void;
}

export default function ProfileFields({ isDisabled, onClick }: IProfileFields) {
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
    <FieldsLayout
      fields={profileFields}
      customElement={{
        accountname: (
          <Button
            isDisabled={isDisabled}
            color="primary"
            onPress={onClick}
            className="px-1 text-white"
          >
            중복확인
          </Button>
        ),
      }}
    >
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
