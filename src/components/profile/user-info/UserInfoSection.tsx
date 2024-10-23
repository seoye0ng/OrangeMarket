import classNames from 'classnames';

import { IUserProfile } from '@/api/types/user';
import UserImage from '@/components/common/user-card/UserImage';
import { FollowerFollowingButton } from './FollowerFollowButton';
import { ActionButtons } from './ActionButtons';

interface IUserInfoSection {
  type?: 'user' | 'otherUser';
  userProfile: IUserProfile;
  className?: string;
}

export default function UserInfoSection({
  type = 'user',
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
          <FollowerFollowingButton count={userProfile.followerCount} />
          <FollowerFollowingButton count={userProfile.followingCount} />
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
      <ActionButtons type={type} />
    </section>
  );
}