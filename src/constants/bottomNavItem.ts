import Chat from '@/components/icons/Chat';
import Home from '@/components/icons/Home';
import Post from '@/components/icons/Post';
import Profile from '@/components/icons/Profile';

const BOTTOM_NAV_ITEMS = {
  home: { label: '홈', href: '/', bottomNavIcon: Home },
  chatList: { label: '채팅', href: '/chat', bottomNavIcon: Chat },
  post: { label: '게시물 작성', href: '/post', bottomNavIcon: Post },
  profile: { label: '프로필', href: '/profile', bottomNavIcon: Profile },
};

export default BOTTOM_NAV_ITEMS;
