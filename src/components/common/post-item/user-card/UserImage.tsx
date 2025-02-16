import classNames from 'classnames';
import Link from 'next/link';

import { IUserProfile, IUserProfileBase } from '@/api/types/user';
import CustomImage from '@/components/common/custom-image/CustomImage';

interface IUserImageProps {
  user?: IUserProfileBase | IUserProfile;
  size?: '42px' | '50px' | '110px' | '36px' | 'inherit';
  link?: boolean;
  className?: string;
}

const sizeMap: Record<string, string> = {
  '42px': 'h-[42px] w-[42px]',
  '50px': 'h-[50px] w-[50px]',
  '110px': 'h-[110px] w-[110px]',
  '36px': 'h-[36px] w-[36px]',
  inherit: 'h-full w-full',
};

export default function UserImage({
  user,
  size = '42px',
  link = true,
  className,
}: IUserImageProps) {
  const avatarClassNames = classNames(sizeMap[size], 'rounded-full', className);

  const Avatar = (
    <CustomImage
      imageSrc={user?.image || '/assets/icons/basic-profile-img-.svg'}
      alt={`${user?.username} 프로필 이미지`}
      className={avatarClassNames}
    />
  );

  return link ? <Link href={user?.accountname || '#'}>{Avatar}</Link> : Avatar;
}
