import Text from '@/components/common/text/Text';
import { formatFollowerCount } from '@/utils/fomatFollowCount';

interface FollowStatButtonProps {
  count: number;
  onClick?: () => void;
  label?: string;
}

export default function FollowStatButton({
  count,
  onClick,
  label,
}: FollowStatButtonProps) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-2"
      onClick={onClick}
    >
      <Text size="18px" weight="bold">
        {formatFollowerCount(count)}
      </Text>
      {label && (
        <Text size="12px" color="gray-300">
          {label}
        </Text>
      )}
    </button>
  );
}
