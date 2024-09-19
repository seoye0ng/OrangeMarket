'use client';

import BackArrow from '@/components/icons/BackArrow';
import More from '@/components/icons/More';
import Search from '@/components/icons/Search';

import withHeader from './withHeader';

interface IHeaderProps {
  pageType?: string;
}

const handleClick = () => {
  console.log('click');
};

const HomeHeader = withHeader('감귤마켓 피드', undefined, () => (
  <Search activeColor="gray-200" onClick={handleClick} />
));
const SearchHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <Search activeColor="gray-200" onClick={handleClick} />,
);
const ProfileHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <More activeColor="gray-200" onClick={handleClick} />,
);
const ChatListHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <More activeColor="gray-200" onClick={handleClick} />,
);
const PostHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <More activeColor="gray-200" onClick={handleClick} />,
);
const ChatHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <More activeColor="gray-200" onClick={handleClick} />,
);
const FollowerHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  undefined,
);
// TODO: More버튼 업로드 버튼으로 바꾸기
const ProductHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <More activeColor="gray-200" onClick={handleClick} />,
);
const EditProfileHeader = withHeader(
  undefined,
  () => <BackArrow activeColor="gray-300" onClick={handleClick} />,
  () => <More activeColor="gray-200" onClick={handleClick} />,
);

export default function Header({ pageType = 'home' }: IHeaderProps) {
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
