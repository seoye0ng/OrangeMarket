'use client';

import classNames from 'classnames';

import { IUserProfile } from '@/api/types/user';

import AuthService from '@/services/AuthService';
import UserActions from '../components/user-info/UserActions';
import UserInfoDetails from '../components/user-info/UserInfoDetails';
import UserInfoHeader from '../components/user-info/UserInfoHeader';
import useNavigate from '@/hooks/useNavigate';
import { useState } from 'react';

interface IUserInfoContainer {
  userProfile: IUserProfile;
  className?: string;
}

export default function UserInfoContainer({
  userProfile,
  className,
}: IUserInfoContainer) {
  const { goTo } = useNavigate();

  const {
    username,
    accountname,
    intro,
    followerCount,
    followingCount,
    isfollow,
  } = userProfile;

  const isMyprofile = AuthService.getUser() === accountname;

  const handleNavigation = (path: string) => {
    goTo(`/${path}`);
  };
  const [isFollowed, setIsFollowed] = useState(isfollow);

  const handleFollow = () => {
    setIsFollowed((prev) => !prev);

    if (isFollowed) {
      // 팔로우 취소 API 호출
      return;
    }
    // 팔로우 API 호출
    return;
  };

  return (
    <section className={classNames('flex flex-col items-center', className)}>
      <UserInfoHeader
        followerCount={followerCount}
        followingCount={followingCount}
        accountName={accountname}
        onNavigate={handleNavigation}
      />
      <UserInfoDetails
        username={username}
        accountname={accountname}
        intro={intro}
      />
      <UserActions
        isFollow={isFollowed}
        isMyProfile={isMyprofile}
        onNavigate={handleNavigation}
        onFollow={handleFollow}
      />
    </section>
  );
}
