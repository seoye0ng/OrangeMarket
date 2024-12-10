import IconButton from '@/components/common/button/IconButton';
import PostAlbum from '@/components/icons/PostAlbum';
import PostList from '@/components/icons/PostList';
import { IIconDefaultProps } from '@/components/icons/types/iconType';

interface IconSwitcherProps {
  postView: 'list' | 'album';
  onSwitch: (view: 'list' | 'album') => void;
}

const icons: {
  label: string;
  IconComponent: React.FC<IIconDefaultProps>;
  view: 'list' | 'album';
}[] = [
  {
    label: '리스트형 아이콘',
    IconComponent: PostList,
    view: 'list',
  },
  {
    label: '앨범형 아이콘',
    IconComponent: PostAlbum,
    view: 'album',
  },
];

const getIconColor = (currentView: string, targetView: string) => {
  return currentView === targetView ? 'gray-300' : 'gray-100';
};

export default function ViewSwitcher({
  postView,
  onSwitch,
}: IconSwitcherProps) {
  return (
    <div className="border-b-1 border-gray-100 px-4 pt-2 text-right">
      {icons.map(({ label, IconComponent, view }) => (
        <IconButton
          key={view}
          className="ml-4"
          label={label}
          onClick={() => onSwitch(view)}
          icon={<IconComponent color={getIconColor(postView, view)} />}
        />
      ))}
    </div>
  );
}
