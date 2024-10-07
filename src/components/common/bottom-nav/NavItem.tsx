'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IBottomNavItem } from '@/constants/bottomNavItem';

function NavItem({ href, label, bottomNavIcon: Icon }: IBottomNavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="flex-shrink-0 cursor-pointer">
      <Link href={href} className="flex flex-col items-center gap-1">
        <Icon
          color={isActive ? 'primary-100' : 'gray-300'}
          isActive={isActive}
        />
        <p
          className={`text-14px font-normal transition-colors ${
            isActive ? 'text-primary-100' : 'text-gray-300'
          }`}
        >
          {label}
        </p>
      </Link>
    </li>
  );
}

export default NavItem;
