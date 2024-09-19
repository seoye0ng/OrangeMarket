'use client';

import BackArrow from '@/components/icons/BackArrow';
import More from '@/components/icons/More';
import Search from '@/components/icons/Search';

import withHeader from './withHeader';

interface HeaderProps {
  pageType: string;
}

const handleClick = () => {
  console.log('click');
};

const HomeHeader = withHeader('감귤마켓 피드', undefined, () => (
  <Search onClick={handleClick} />
));
const SearchHeader = withHeader(undefined, BackArrow, Search);
const ProfileHeader = withHeader(undefined, BackArrow, () => (
  <More onClick={handleClick} />
));
const ChatListHeader = withHeader(undefined, BackArrow, More);
const PostHeader = withHeader(undefined, BackArrow, Search);
const ChatHeader = withHeader(undefined, BackArrow, More);
const FollowerHeader = withHeader(undefined, BackArrow, Search);
const ProductHeader = withHeader(undefined, BackArrow, Search);
const EditProfileHeader = withHeader(undefined, BackArrow, Search);

export default function Header({ pageType = 'profile' }: HeaderProps) {
  switch (pageType) {
    case 'home':
      return <HomeHeader />;
    case 'search':
      return <SearchHeader />;
    case 'profile':
      return <ProfileHeader />;
    case 'chatList':
      return <ChatListHeader />;
    case 'post':
      return <PostHeader />;
    case 'follower':
      return <FollowerHeader />;
    case 'chat':
      return <ChatHeader />;
    case 'product':
      return <ProductHeader />;
    case 'edit-profile':
      return <EditProfileHeader />;
    default:
      return <HomeHeader />;
  }
}
