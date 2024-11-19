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
  LeftIcon?: React.ComponentType<IIconProps>;
  RightIcon?: React.ComponentType<IIconProps>;
  RightButton?: React.ComponentType<ICustomButtonProps>;
  RightSearchForm?: React.ComponentType<ISearchFormProps>;
  rightButtonProps?: ICustomButtonProps;
  rightSearchFormProps?: ISearchFormProps;
}

export const headerConfig: Record<string, IHeaderConfig> = {
  '/': {
    title: '오렌지마켓',
    LeftIcon: undefined,
    RightIcon: Search,
  },
  '/chat': {
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/profile': {
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/search': {
    LeftIcon: BackArrow,
    RightSearchForm: SearchForm,
  },
  '/chat-list': {
    LeftIcon: BackArrow,
  },
  '/followers': {
    title: 'Followers',
    LeftIcon: BackArrow,
  },
  '/followings': {
    title: 'Followings',
    LeftIcon: BackArrow,
  },
  '/post': {
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/upload': {
    LeftIcon: BackArrow,
    RightButton: CustomButton,
    rightButtonProps: { color: 'primary', size: 'ms', children: '업로드' },
  },
  '/add-product': {
    LeftIcon: BackArrow,
    RightButton: CustomButton,
    rightButtonProps: { color: 'primary', size: 'ms', children: '저장' },
  },
  '/edit-product': {
    LeftIcon: BackArrow,
    RightIcon: More,
  },
  '/edit-profile': {
    LeftIcon: BackArrow,
    RightIcon: More,
  },
};
