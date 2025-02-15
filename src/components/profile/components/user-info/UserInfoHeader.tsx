import UserImage from '@/components/common/post-item/user-card/UserImage';

import FollowStatButton from './FollowStatButton';

interface IUserInfoHeaderProps {
  accountName?: string;
  followerCount: number;
  followingCount: number;
  onNavigate: (path: string) => void;
}

export default function UserInfoHeader({
  followerCount,
  followingCount,
  accountName,
  onNavigate,
}: IUserInfoHeaderProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <UserImage size="110px" />
      <div className="absolute flex w-full items-center justify-between px-10">
        <FollowStatButton
          count={followerCount}
          onClick={() => onNavigate(`/${accountName}/follower`)}
          label="followers"
        />
        <FollowStatButton
          count={followingCount}
          onClick={() => onNavigate(`/${accountName}/following`)}
          label="following"
        />
      </div>
    </div>
  );
}
