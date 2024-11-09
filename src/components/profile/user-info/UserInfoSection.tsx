import classNames from 'classnames';

import { IUserProfile } from '@/api/types/user';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import Text from '@/components/common/text/Text';

import { ActionButtons } from './ActionButtons';
import { FollowerFollowingButton } from './FollowerFollowButton';

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
    <section className={classNames('flex flex-col items-center', className)}>
      <div className="relative flex w-full items-center">
        <UserImage
          size="110px"
          className="absolute left-1/2 -translate-x-1/2"
        />
        <div className="absolute flex w-full items-center justify-between px-10">
          <FollowerFollowingButton count={userProfile.followerCount} />
          <FollowerFollowingButton count={userProfile.followingCount} />
        </div>
      </div>
      <div className="mb-5 mt-4 flex flex-col items-center">
        <Text size="16px" weight="bold">
          {userProfile.username}
        </Text>
        <Text size="14px" color="gray-300">
          {userProfile.accountname}
        </Text>
        <Text size="14px" color="gray-300">
          {userProfile.intro}
        </Text>
      </div>
      <ActionButtons type={type} />
    </section>
  );
}
