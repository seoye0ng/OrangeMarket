'use client';

import classNames from 'classnames';

import { IUserProfile } from '@/api/types/user';

import AuthService from '@/services/AuthService';
import UserActions from './UserActions';
import UserInfoDetails from './UserInfoDetails';
import UserInfoHeader from './UserInfoHeader';

interface IUserInfoSection {
  userProfile: IUserProfile;
  className?: string;
}

export default function UserInfoSection({
  userProfile,
  className,
}: IUserInfoSection) {
  const {
    username,
    accountname,
    intro,
    followerCount,
    followingCount,
    isfollow,
  } = userProfile;

  const isMyprofile = AuthService.getUser() === accountname;

  return (
    <section className={classNames('flex flex-col items-center', className)}>
      <UserInfoHeader
        followerCount={followerCount}
        followingCount={followingCount}
        accountName={accountname}
      />
      <UserInfoDetails
        username={username}
        accountname={accountname}
        intro={intro}
      />
      <UserActions isFollow={isfollow} isMyProfile={isMyprofile} />
    </section>
  );
}
