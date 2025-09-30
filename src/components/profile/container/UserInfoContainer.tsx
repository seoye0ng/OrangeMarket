'use client';

import { useQueryClient } from '@tanstack/react-query';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

import { IUserProfile } from '@/api/types/user';
import useNavigate from '@/hooks/useNavigate';
import useFollow from '@/queries/follow/useFollow';
import useUnFollow from '@/queries/follow/useUnFollow';
import { profileKeys } from '@/queries/profile/profileKeys';
import AuthService from '@/services/AuthService';

import UserActions from '../components/user-info/UserActions';
import UserInfoDetails from '../components/user-info/UserInfoDetails';
import UserInfoHeader from '../components/user-info/UserInfoHeader';

interface IUserInfoContainer {
  userProfile: IUserProfile;
  className?: string;
}

export default function UserInfoContainer({
  userProfile,
  className,
}: IUserInfoContainer) {
  const queryClient = useQueryClient();
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

  const { mutate: follow } = useFollow();
  const { mutate: unfollow } = useUnFollow();

  const handleNavigation = (path: string) => {
    goTo(`${path}`);
  };
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const [followerCnt, setFollowerCnt] = useState(followerCount);

  useEffect(() => {
    setIsFollowed(isfollow);
  }, [isfollow]);

  const handleFollow = () => {
    const nextState = !isFollowed; // 반전된 상태를 먼저 계산
    setIsFollowed(nextState);

    if (nextState) {
      follow({ accountName: accountname });
      setFollowerCnt((prev) => prev + 1);
    } else {
      unfollow({ accountName: accountname });
      setFollowerCnt((prev) => prev - 1);
    }

    queryClient.invalidateQueries({
      queryKey: profileKeys.detail(accountname),
    });
  };

  return (
    <section className={classNames('flex flex-col items-center', className)}>
      <UserInfoHeader
        followerCount={followerCnt}
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
