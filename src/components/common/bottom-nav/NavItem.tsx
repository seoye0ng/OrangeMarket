'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Text from '@/components/common/text/Text';
import { IBottomNavConfig } from '@/config/bottomNavConfig';

function NavItem({
  href,
  label,
  bottomNavIcon: Icon,
}: IBottomNavConfig & { href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="flex-shrink-0 cursor-pointer">
      <Link href={href} className="flex-center gap-1">
        <Icon
          color={isActive ? 'primary-100' : 'gray-300'}
          isActive={isActive}
        />
        <Text
          size="10px"
          color={isActive ? 'primary-100' : 'gray-300'}
          className="transition-colors"
        >
          {label}
        </Text>
      </Link>
    </li>
  );
}

export default NavItem;
