interface IFollowerFollowingButtonProps {
  count: number;
  onClick?: () => void;
}

export const FollowerFollowingButton = ({
  count,
  onClick,
}: IFollowerFollowingButtonProps) => {
  return (
    <button type="button" className="max-w-12 text-center" onClick={onClick}>
      <p className="mb-6px font-bold">{count}</p>
      <p className="text-10px font-normal leading-3 text-gray-300">followers</p>
    </button>
  );
};
