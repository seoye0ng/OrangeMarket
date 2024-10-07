import Chat from '@/components/icons/Chat';
import Home from '@/components/icons/Home';
import Post from '@/components/icons/Post';
import Profile from '@/components/icons/Profile';
import { IIconDefaultProps } from '@/components/icons/types/iconType';

export interface IBottomNavConfig {
  label: string;
  bottomNavIcon: React.ComponentType<IIconDefaultProps>;
}

const bottomNavConfig: { [key: string]: IBottomNavConfig } = {
  '/': { label: '홈', bottomNavIcon: Home },
  '/chat': { label: '채팅', bottomNavIcon: Chat },
  '/post': { label: '게시물 작성', bottomNavIcon: Post },
  '/profile': { label: '프로필', bottomNavIcon: Profile },
};

export default bottomNavConfig;
