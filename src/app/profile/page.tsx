'use client';

import PostSection from '@/components/profile/post/PostSection';
import ProductListSection from '@/components/profile/product/ProductListSection';
import UserInfoSection from '@/components/profile/user-info/UserInfoSection';
import { productList } from '@/mocks/productList';
import { postList } from '@/mocks/postList';

const userProfile = {
  _id: '',
  accountname: '@alpaca__!',
  image: '',
  username: '오렌지 알파카',
  intro: '안녕 난 오렌지 알파카!',
  follower: [''],
  following: [''],
  followerCount: 102345,
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
      <ProductListSection className="bg-white py-5" productList={productList} />
      <PostSection className="bg-white" postList={postList} />
    </main>
  );
}
