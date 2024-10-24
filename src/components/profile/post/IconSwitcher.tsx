import IconButton from '@/components/common/button/IconButton';
import PostAlbum from '@/components/icons/PostAlbum';
import PostList from '@/components/icons/PostList';

interface IconSwitcherProps {
  postType: 'list' | 'album';
  onListClick: () => void;
  onAlbumClick: () => void;
}

const getIconColor = (currentType: string, targetType: string) => {
  return currentType === targetType ? 'gray-300' : 'gray-100';
};

export function IconSwitcher({
  postType,
  onListClick,
  onAlbumClick,
}: IconSwitcherProps) {
  const icons = [
    {
      label: '리스트형 아이콘',
      onClick: onListClick,
      IconComponent: PostList,
      type: 'list',
    },
    {
      label: '앨범형 아이콘',
      onClick: onAlbumClick,
      IconComponent: PostAlbum,
      type: 'album',
    },
  ];

  return (
    <div className="border-b-1 border-gray-100 px-4 pt-2 text-right">
      {icons.map(({ label, onClick, IconComponent, type }) => (
        <IconButton
          key={type}
          className="ml-4"
          label={label}
          onClick={onClick}
          icon={<IconComponent color={getIconColor(postType, type)} />}
        />
      ))}
    </div>
  );
}
