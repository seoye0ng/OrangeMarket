import Image from 'next/image';
import Link from 'next/link';

import { IUserProfile } from '@/api/types/user';
import { CustomButton } from '@/components/common/button/Button';
import SMore from '@/components/icons/SMore';

interface IUserProps {
  type: 'post' | 'search' | 'follow';
  userProfile: IUserProfile;
}

export default function User({ type, userProfile }: IUserProps) {
  const isPostType = type === 'post';
  const isfollowType = type === 'follow';

  return (
    <article className="flex items-center gap-3">
      <Link href="/" className="relative h-[42px] w-[42px] shrink-0">
        <Image
          src={userProfile.image || '/assets/icons/basic-profile-img-.svg'}
          alt={`${userProfile.username} 프로필 이미지`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <div className="flex flex-auto items-center justify-between">
        <div>
          <p
            className={`text-14px font-medium leading-17px ${isPostType ? 'mb-2px' : 'mb-6px'}`}
          >
            {userProfile.username}
          </p>
          <p className="text-12px font-normal leading-14px text-gray-300">
            {userProfile.accountname}
          </p>
        </div>
        {isPostType && (
          <button type="button" aria-label="더보기 버튼" className="self-start">
            <SMore />
          </button>
        )}
        {isfollowType && (
          <CustomButton color="primary" size="s" radius="full">
            팔로우
          </CustomButton>
        )}
      </div>
    </article>
  );
}
