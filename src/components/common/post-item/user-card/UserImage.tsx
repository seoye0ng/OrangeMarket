import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { IUserProfile, IUserProfileBase } from '@/api/types/user';

interface IUserImageProps {
  user?: IUserProfileBase | IUserProfile;
  size?: '42px' | '50px' | '110px' | '36px' | 'inherit';
  type?: 'link' | 'disabled';
  className?: string;
}

export default function UserImage({
  user,
  size = '42px',
  type = 'disabled',
  className,
}: IUserImageProps) {
  const herf = type === 'link' ? `/profile/:${user?.accountname}` : '#';

  return (
    <Link
      href={herf}
      className={classNames(
        'relative inline-block shrink-0 overflow-hidden rounded-full',
        className,
        { 'pointer-events-none': type !== 'link' },
      )}
      style={{ height: size, width: size }} // 스타일로 동적으로 크기 설정
    >
      <Image
        src={user?.image || '/assets/icons/basic-profile-img-.svg'}
        alt={`${user?.username} 프로필 이미지`}
        fill
        priority
        className="object-cover"
      />
    </Link>
  );
}
