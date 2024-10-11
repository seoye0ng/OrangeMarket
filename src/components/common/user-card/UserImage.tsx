import Image from 'next/image';
import Link from 'next/link';

import { IUserProfile } from '@/api/types/user';

interface IUserProps {
  user?: IUserProfile;
  size?: '[42px]' | '[50px]';
  type?: 'link' | 'disabled';
}

export default function UserImage({
  user,
  size = '[42px]',
  type = 'disabled',
}: IUserProps) {
  const herf = type === 'link' ? `/profile/:${user?.accountname}` : '#';

  return (
    <Link href={herf} className={`relative h-${size} w-${size} shrink-0`}>
      <Image
        src={user?.image || '/assets/icons/basic-profile-img-.svg'}
        alt={`${user?.username} 프로필 이미지`}
        fill
        style={{ objectFit: 'cover' }}
      />
    </Link>
  );
}
