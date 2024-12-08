import UserImage from '@/components/common/post-item/user-card/UserImage';
import FollowStatButton from './FollowStatButton';

interface IUserInfoHeaderProps {
  className?: string;
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
    <div className="relative flex w-full items-center">
      <UserImage size="110px" className="absolute left-1/2 -translate-x-1/2" />
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
