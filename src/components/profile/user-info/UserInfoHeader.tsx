import UserImage from '@/components/common/post-item/user-card/UserImage';
import FollowStatButton from './FollowStatButton';
import useNavigate from '@/hooks/useNavigate';

interface IUserInfoHeaderProps {
  className?: string;
  accountName?: string;
  followerCount: number;
  followingCount: number;
}

export default function UserInfoHeader({
  followerCount,
  followingCount,
  accountName,
}: IUserInfoHeaderProps) {
  const { goTo } = useNavigate();

  const onButtonClick = (path: 'follower' | 'following') => {
    goTo(`/${accountName}/${path}`);
  };

  return (
    <div className="relative flex w-full items-center">
      <UserImage size="110px" className="absolute left-1/2 -translate-x-1/2" />
      <div className="absolute flex w-full items-center justify-between px-10">
        <FollowStatButton
          count={followerCount}
          onClick={() => onButtonClick('follower')}
          label="followers"
        />
        <FollowStatButton
          count={followingCount}
          onClick={() => onButtonClick('following')}
          label="following"
        />
      </div>
    </div>
  );
}
