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
    <button type="button" className="text-center" onClick={onClick}>
      <p className="mb-6px font-bold">{formatFollowerCount(count)}</p>
      <p className="text-10px font-normal leading-3 text-gray-300">followers</p>
    </button>
  );
}
