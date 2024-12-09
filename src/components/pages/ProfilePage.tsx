'use client';

import '@/__mock__';

import LoadingSpinner from '@/components/common/loading/LoadingSpinner';
import PostContainer from '@/components/profile/container/PostContainer';
import ProductListContainer from '@/components/profile/container/ProductListContainer';
import UserInfoContainer from '@/components/profile/container/UserInfoContainer';
import useProfile from '@/hooks/queries/profile/useProfile';

interface IProfilePageProps {
  accountName: string;
}

export default function ProfilePage({ accountName }: IProfilePageProps) {
  const { data: userProfile, isError, isLoading } = useProfile(accountName);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !userProfile) {
    return <div>해당 계정이 존재하지 않습니다.</div>;
  }

  return (
    <main className="flex flex-col gap-6px bg-gray-50">
      <UserInfoContainer
        userProfile={userProfile.profile}
        className="bg-white pb-26px pt-30px"
      />
      <ProductListContainer
        className="bg-white py-5"
        accountName={userProfile.profile.accountname}
      />
      <PostContainer
        className="bg-white"
        accountName={userProfile.profile.accountname}
      />
    </main>
  );
}
