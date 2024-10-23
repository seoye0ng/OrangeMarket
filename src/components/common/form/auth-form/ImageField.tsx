'use client';

import { useFormContext } from 'react-hook-form';

import UserImage from '@/components/common/post-item/user-card/UserImage';

export default function ImageField() {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="profile-upload" aria-label="프로필 이미지 업로드">
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
  );
}
