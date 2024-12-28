import Chat from '@/components/icons/Chat';
import Home from '@/components/icons/Home';
import Post from '@/components/icons/Post';
import Profile from '@/components/icons/Profile';
import { IIconDefaultProps } from '@/components/icons/types/iconType';

export interface IBottomNavConfig {
  label: string;
  href: string;
  bottomNavIcon: React.ComponentType<IIconDefaultProps>;
}

const bottomNavConfig: IBottomNavConfig[] = [
  {
    label: '홈',
    href: '/feed',
    bottomNavIcon: Home,
  },
  {
    label: '채팅',
    href: '/chat',
    bottomNavIcon: Chat,
  },
  {
    label: '게시물 작성',
    href: '/upload',
    bottomNavIcon: Post,
  },
  {
    label: '프로필',
    href: '/',
    bottomNavIcon: Profile,
  },
];

export default bottomNavConfig;
