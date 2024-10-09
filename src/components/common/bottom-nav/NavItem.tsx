'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <p
          className={`text-10px font-normal leading-14px transition-colors ${
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
