import BackArrow from '@/components/icons/BackArrow';
import More from '@/components/icons/More';
import Search from '@/components/icons/Search';
import { IIconProps } from '@/components/icons/types/iconType';

interface IHeaderConfig {
  title?: string;
  LeftIcon?: React.ComponentType<IIconProps>;
  RightIcon?: React.ComponentType<IIconProps>;
}

export const headerConfig: Record<string, IHeaderConfig> = {
  '/': {
    title: '오렌지마켓',
    LeftIcon: undefined,
    RightIcon: Search,
  },
  '/chat': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/profile': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/search': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: Search,
  },
  '/chat-list': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: undefined,
  },
  '/followers': {
    title: 'Followers',
    LeftIcon: BackArrow,
    RightIcon: undefined,
  },
  '/followings': {
    title: 'Followings',
    LeftIcon: BackArrow,
    RightIcon: undefined,
  },
  '/upload': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: undefined,
  },
  '/add-product': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: undefined,
  },
  '/edit-product': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/edit-profile': {
    title: '',
    LeftIcon: BackArrow,
    RightIcon: More,
  },
};
