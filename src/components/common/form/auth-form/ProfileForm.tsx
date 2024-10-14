/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useFormContext } from 'react-hook-form';

import { UnderlineInput } from '@/components/common/input/UnderlineInput';
import UserImage from '@/components/common/user-card/UserImage';

const profileFields = {
  username: {
    label: '사용자 이름',
    placeholder: '2~10자 이내여야 합니다.',
  },
  accountname: {
    label: '계정 ID',
    placeholder: '영문, 숫자, 특수문자(.), (_)만 사용 가능합니다..',
  },
  intro: {
    label: '소개',
    placeholder: '자신과 판매할 상품에 대해 소개해 주세요!.',
  },
};

export default function ProfileForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="flex-center gap-30px">
      <div>
        <label htmlFor="profile-upload" className="relative">
          <UserImage size="110px" />
        </label>
        <input
          {...register('image')}
          type="file"
          accept="image/*"
          className="hidden"
          id="profile-upload"
        />
      </div>
      <div className="flex-center gap-4">
        {Object.entries(profileFields).map(([name, field]) => (
          <UnderlineInput
            key={name}
            {...register(name)}
            isClearable
            variant="underlined"
            label={field.label}
            placeholder={field.placeholder}
            isInvalid={!!errors[name]}
            errorMessage={errors[name]?.message?.toString()}
          />
        ))}
      </div>
    </fieldset>
  );
}
