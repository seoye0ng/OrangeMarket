import classNames from 'classnames';

import { IUserProfile, IUserProfileBase } from '@/api/types/user';
import Text from '@/components/common/text/Text';

import UserImage from './UserImage';

interface IUserProps {
  imageSize: '42px' | '50px';
  userProfile: IUserProfileBase | IUserProfile;
  children?: React.ReactNode;
  className?: string;
}

export default function UserCard({
  imageSize,
  userProfile,
  children,
  className,
}: IUserProps) {
  return (
    <article className={classNames('flex items-center gap-3', className)}>
      <UserImage user={userProfile} size={imageSize} />
      <div className="flex flex-auto items-center justify-between">
        <div>
          <Text
            size="14px"
            weight="medium"
            className={classNames(imageSize === '42px' ? 'mb-2px' : 'mb-6px')}
          >
            {userProfile.username}
          </Text>
          <Text size="12px" color="gray-300">
            {userProfile.accountname}
          </Text>
        </div>
        {children}
      </div>
    </article>
  );
}
