import Text from '@/components/common/text/Text';

interface IUserInfoDetailProps {
  username: string;
  accountname: string;
  intro: string;
}

export default function UserInfoDetails({
  username,
  accountname,
  intro,
}: IUserInfoDetailProps) {
  return (
    <div className="mb-5 mt-4 flex flex-col items-center">
      <Text size="16px" weight="bold">
        {username}
      </Text>
      <Text size="14px" color="gray-300" className="mt-6px">
        {accountname}
      </Text>
      <Text size="14px" color="gray-300" className="mt-4">
        {intro}
      </Text>
    </div>
  );
}
