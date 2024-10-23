import classNames from 'classnames';

import { IUserProfile, IUserProfileBase } from '@/api/types/user';

import UserImage from './UserImage';

interface IUserProps {
  imageSize: '42px' | '50px';
  userProfile: IUserProfileBase | IUserProfile;
  children?: React.ReactNode;
}

export default function UserCard({
  imageSize,
  userProfile,
  children,
}: IUserProps) {
  return (
    <article className="flex items-center gap-3">
      <UserImage user={userProfile} size={imageSize} />
      <div className="flex flex-auto items-center justify-between">
        <div>
          <p
            className={classNames(
              'text-14px font-medium leading-17px',
              imageSize === '42px' ? 'mb-2px' : 'mb-6px',
            )}
          >
            {userProfile.username}
          </p>
          <p className="text-12px font-normal leading-14px text-gray-300">
            {userProfile.accountname}
          </p>
        </div>
        {children}
      </div>
    </article>
  );
}
