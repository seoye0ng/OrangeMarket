import IconButton from '@/components/common/button/IconButton';
import PostAlbum from '@/components/icons/PostAlbum';
import PostList from '@/components/icons/PostList';
import { IIconDefaultProps } from '@/components/icons/types/iconType';

interface IconSwitcherProps {
  postType: 'list' | 'album';
  onSwitch: (type: 'list' | 'album') => void;
}

const icons: {
  label: string;
  IconComponent: React.FC<IIconDefaultProps>;
  type: 'list' | 'album';
}[] = [
  {
    label: '리스트형 아이콘',
    IconComponent: PostList,
    type: 'list',
  },
  {
    label: '앨범형 아이콘',
    IconComponent: PostAlbum,
    type: 'album',
  },
];

const getIconColor = (currentType: string, targetType: string) => {
  return currentType === targetType ? 'gray-300' : 'gray-100';
};

export function IconSwitcher({ postType, onSwitch }: IconSwitcherProps) {
  return (
    <div className="border-b-1 border-gray-100 px-4 pt-2 text-right">
      {icons.map(({ label, IconComponent, type }) => (
        <IconButton
          key={type}
          className="ml-4"
          label={label}
          onClick={() => onSwitch(type)}
          icon={<IconComponent color={getIconColor(postType, type)} />}
        />
      ))}
    </div>
  );
}
