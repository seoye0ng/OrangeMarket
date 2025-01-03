/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomButton, {
  ICustomButtonProps,
} from '@/components/common/button/Button';
import SearchForm, {
  ISearchFormProps,
} from '@/components/common/form/search-form/SearchForm';
import BackArrow from '@/components/icons/BackArrow';
import More from '@/components/icons/More';
import Search from '@/components/icons/Search';
import { IIconProps } from '@/components/icons/types/iconType';

export interface IHeaderConfig {
  title?: string;
  LeftButton?: React.ComponentType<IIconProps>;
  onLeftClick?: () => void;
  RightIcon?: React.ComponentType<IIconProps>;
  onRightClick?: () => void;
  RightButton?: React.ComponentType<ICustomButtonProps>;
  rightButtonProps?: ICustomButtonProps;
  RightForm?: React.ComponentType<ISearchFormProps>;
  rightFormProps?: ISearchFormProps;
}

export const getHeaderConfig = (
  pathname: string,
  goBack: () => void,
  goTo: (path: string) => void,
  setIsHeaderClick: (value: boolean) => void,
  openDrawer: () => void,
  setSearchTerm: (searchTerm: string) => void,
): IHeaderConfig | null => {
  const segments = pathname.split('/').filter(Boolean);

  if (pathname === '/feed') {
    return {
      title: '오렌지마켓',
      RightIcon: Search,
      onRightClick: () => goTo('/search'),
    };
  }

  if (pathname === '/search') {
    return {
      LeftButton: BackArrow,
      RightForm: SearchForm,
      onLeftClick: goBack,
      rightFormProps: {
        onSearch: (searchTerm: string) => setSearchTerm(searchTerm),
      },
    };
  }

  if (pathname === '/chat') {
    return {
      LeftButton: BackArrow,
      RightIcon: More,
      onLeftClick: goBack,
      onRightClick: () => openDrawer(),
    };
  }

  if (pathname === '/chat-list') {
    return {
      LeftButton: BackArrow,
      RightIcon: More,
      onLeftClick: goBack,
      onRightClick: () => openDrawer,
    };
  }

  if (pathname === '/post') {
    return {
      LeftButton: BackArrow,
      RightIcon: More,
      onLeftClick: goBack,
      onRightClick: () => openDrawer(),
    };
  }

  if (pathname === '/upload') {
    return {
      LeftButton: BackArrow,
      RightButton: CustomButton,
      rightButtonProps: { color: 'primary', size: 'ms', children: '업로드' },
      onLeftClick: goBack,
      onRightClick: () => setIsHeaderClick(true),
    };
  }

  if (pathname === '/add-product') {
    return {
      LeftButton: BackArrow,
      RightButton: CustomButton,
      rightButtonProps: { color: 'primary', size: 'ms', children: '저장' },
      onLeftClick: goBack,
      onRightClick: () => setIsHeaderClick(true),
    };
  }

  if (pathname === '/account/edit') {
    return {
      LeftButton: BackArrow,
      RightButton: CustomButton,
      rightButtonProps: { color: 'primary', size: 'ms', children: '저장' },
      onLeftClick: goBack,
      onRightClick: () => setIsHeaderClick(true),
    };
  }

  if (pathname === '/edit-product') {
    return {
      LeftButton: BackArrow,
      RightIcon: More,
      onLeftClick: goBack,
      onRightClick: () => openDrawer(),
    };
  }

  //   profile
  if (segments.length === 1) {
    return {
      LeftButton: BackArrow,
      onLeftClick: goBack,
      RightIcon: More,
      onRightClick: () => openDrawer(),
    };
  }

  if (segments.length === 2 && segments[1] === 'following') {
    return {
      LeftButton: BackArrow,
      onLeftClick: goBack,
    };
  }

  if (segments.length === 2 && segments[1] === 'followers') {
    return {
      LeftButton: BackArrow,
      onLeftClick: goBack,
    };
  }

  return null;
};
