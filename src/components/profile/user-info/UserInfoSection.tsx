import classNames from 'classnames';
import Image from 'next/image';

import { IUserProfile } from '@/api/types/user';
import CustomButton from '@/components/common/button/Button';
import IconButton from '@/components/common/button/IconButton';
import UserImage from '@/components/common/user-card/UserImage';

interface IUserInfoSection {
  type?: 'myProfile' | 'userProfile';
  userProfile: IUserProfile;
  className?: string;
}

export default function UserInfoSection({
  type = 'myProfile',
  userProfile,
  className,
}: IUserInfoSection) {
  return (
    <section
      className={classNames(
        'flex flex-col items-center shadow-test1',
        className,
      )}
    >
      <div className="relative flex w-full items-center shadow-test2">
        <UserImage
          size="110px"
          className="absolute left-1/2 -translate-x-1/2"
        />
        <div className="absolute flex w-full items-center justify-between px-[55px]">
          <button type="button" className="max-w-12 text-center">
            <p className="mb-6px font-bold">{userProfile.followerCount}</p>
            <p className="text-10px font-normal leading-3 text-gray-300">
              followers
            </p>
          </button>
          <button type="button" className="max-w-12 text-center">
            <p className="mb-6px font-bold">{userProfile.followingCount}</p>
            <p className="text-10px font-normal leading-3 text-gray-300">
              followings
            </p>
          </button>
        </div>
      </div>

      <div className="mb-5 mt-4 flex flex-col items-center">
        <p className="mb-6px text-16px font-bold leading-17px">
          {userProfile.username}
        </p>
        <p className="mb-4 text-14px font-normal leading-14px text-gray-300">
          {userProfile.accountname}
        </p>
        <p className="text-14px font-normal leading-17px text-gray-300">
          {userProfile.intro}
        </p>
      </div>

      {type === 'userProfile' && (
        <div className="flex items-center gap-10px">
          <IconButton
            label="채팅 버튼 아이콘"
            className="rounded-full border-1 border-gray-100 p-6px"
          >
            <Image
              src="/assets/icons/icon-message-circle.svg"
              alt="채팅 버튼 아이콘 이미지"
              width={20}
              height={20}
            />
          </IconButton>
          <CustomButton size="ml" color="primary">
            팔로우
          </CustomButton>
          <IconButton
            label="공유 버튼 아이콘"
            className="rounded-full border-1 border-gray-100 p-6px"
          >
            <Image
              src="/assets/icons/icon-share.svg"
              alt="공유 버튼 아이콘 이미지"
              width={20}
              height={20}
            />
          </IconButton>
        </div>
      )}
      {type === 'myProfile' && (
        <div className="flex gap-3">
          <CustomButton size="ml" color="white">
            프로필 수정
          </CustomButton>
          <CustomButton size="m" color="white">
            상품 등록
          </CustomButton>
        </div>
      )}
    </section>
  );
}
