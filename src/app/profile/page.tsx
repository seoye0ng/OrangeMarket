import UserInfoSection from '@/components/profile/user-info/UserInfoSection';

const userProfile = {
  _id: '',
  accountname: '@alpaca__!',
  image: '',
  username: '오렌지 알파카',
  intro: '안녕 난 오렌지 알파카!',
  follower: [''],
  following: [''],
  followerCount: 10234234230,
  followingCount: 50,
  isfollow: false,
};

export default function Profile() {
  // const type = 'user' || 'otherUser'
  return (
    <main className="flex flex-col gap-6px bg-gray-50">
      <UserInfoSection
        userProfile={userProfile}
        className="bg-white pb-26px pt-30px"
      />
    </main>
  );
}
