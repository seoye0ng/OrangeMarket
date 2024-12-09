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
  pathPattern: RegExp;
  config: {
    title?: string;
    LeftIcon?: React.ComponentType<IIconProps>;
    RightIcon?: React.ComponentType<IIconProps>;
    RightButton?: React.ComponentType<ICustomButtonProps>;
    RightSearchForm?: React.ComponentType<ISearchFormProps>;
    rightButtonProps?: ICustomButtonProps;
    rightSearchFormProps?: ISearchFormProps;
  };
}

export const headerConfig: IHeaderConfig[] = [
  {
    pathPattern: /^\/$/,
    config: {
      title: '오렌지마켓',
      RightIcon: Search,
    },
  },
  {
    pathPattern: /^\/chat$/,
    config: {
      LeftIcon: BackArrow,
      RightIcon: More,
    },
  },
  {
    pathPattern: /^\/search$/,
    config: {
      LeftIcon: BackArrow,
      RightSearchForm: SearchForm,
    },
  },
  {
    pathPattern: /^\/chat-list$/,
    config: {
      LeftIcon: BackArrow,
    },
  },
  {
    pathPattern: /^\/profile\/.+\/followers$/,
    config: {
      title: 'Followers',
      LeftIcon: BackArrow,
    },
  },
  {
    pathPattern: /^\/profile\/.+\/following$/,
    config: {
      title: 'Followings',
      LeftIcon: BackArrow,
    },
  },
  {
    pathPattern: /^\/post$/,
    config: {
      LeftIcon: BackArrow,
      RightIcon: More,
    },
  },
  {
    pathPattern: /^\/upload$/,
    config: {
      LeftIcon: BackArrow,
      RightButton: CustomButton,
      rightButtonProps: { color: 'primary', size: 'ms', children: '업로드' },
    },
  },
  {
    pathPattern: /^\/add-product$/,
    config: {
      LeftIcon: BackArrow,
      RightButton: CustomButton,
      rightButtonProps: { color: 'primary', size: 'ms', children: '저장' },
    },
  },
  {
    pathPattern: /^\/edit-product$/,
    config: {
      LeftIcon: BackArrow,
      RightIcon: More,
    },
  },
  {
    pathPattern: /^\/edit-profile$/,
    config: {
      LeftIcon: BackArrow,
      RightIcon: More,
    },
  },
];
