import { CustomButton } from '@/components/common/button';
import UserCard from '@/components/common/post-item/user-card/UserCard';

const userProfile = {
  _id: '',
  accountname: 'alpaca__!',
  image: '',
  username: '오렌지 알파카',
  intro: '안녕 난 오렌지 알파카!',
  follower: [''],
  following: [''],
  followerCount: 102345,
  followingCount: 50,
  isfollow: true,
};

const users = [userProfile, userProfile, userProfile];

export default function FollowListPage() {
  return (
    <main className="px-4 pt-6">
      <ul className="flex flex-col gap-4">
        {users.map((user) => {
          return (
            <UserCard imageSize="50px" userProfile={user}>
              <CustomButton
                color={user.isfollow ? 'white' : 'primary'}
                size="s"
              >
                {user.isfollow ? '취소' : '팔로우'}
              </CustomButton>
            </UserCard>
          );
        })}
      </ul>
    </main>
  );
}
