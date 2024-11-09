import Text from '@/components/common/text/Text';
import { formatFollowerCount } from '@/utils/fomatFollowCount';

interface IFollowerFollowingButtonProps {
  count: number;
  onClick?: () => void;
}

export function FollowerFollowingButton({
  count,
  onClick,
}: IFollowerFollowingButtonProps) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-6px"
      onClick={onClick}
    >
      <Text size="18px" weight="bold">
        {formatFollowerCount(count)}
      </Text>
      <Text size="8px" color="gray-300">
        followers
      </Text>
    </button>
  );
}
