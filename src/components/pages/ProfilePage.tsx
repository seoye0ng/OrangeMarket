'use client';

import { postListData } from '@/__mock__/responseData/postList';
import { productList } from '@/__mock__/responseData/productList';
import PostSection from '@/components/profile/post/PostSection';
import ProductListContainer from '@/components/profile/container/ProductListContainer';
import UserInfoContainer from '@/components/profile/container/UserInfoContainer';

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
  isfollow: false,
};

interface IProfilePageProps {
  accountName: string;
}

export default function ProfilePage({ accountName }: IProfilePageProps) {
  console.log(accountName);
  return (
    <main className="flex flex-col gap-6px bg-gray-50">
      <UserInfoContainer
        userProfile={userProfile}
        className="bg-white pb-26px pt-30px shadow-test1"
      />
      <ProductListContainer
        className="bg-white py-5 shadow-test2"
        productList={productList}
      />
      <PostSection className="bg-white shadow-test4" postList={postListData} />
    </main>
  );
}
