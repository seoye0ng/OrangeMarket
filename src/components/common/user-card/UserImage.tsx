import Image from 'next/image';
import Link from 'next/link';

import { IUserProfile, IUserProfileBase } from '@/api/types/user';

interface IUserProps {
  user?: IUserProfileBase | IUserProfile;
  size?: '42px' | '50px' | '110px' | '36px';
  type?: 'link' | 'disabled';
}

export default function UserImage({
  user,
  size = '42px',
  type = 'disabled',
}: IUserProps) {
  const herf = type === 'link' ? `/profile/:${user?.accountname}` : '#';

  return (
    <Link
      href={herf}
      className="relative inline-block shrink-0 overflow-hidden rounded-full"
      style={{ height: size, width: size }} // 스타일로 동적으로 크기 설정
    >
      <Image
        src={user?.image || '/assets/icons/basic-profile-img-.svg'}
        alt={`${user?.username} 프로필 이미지`}
        fill
        className="object-cover"
      />
    </Link>
  );
}
