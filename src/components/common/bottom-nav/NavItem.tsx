'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IIconDefaultProps } from '@components/icons/types/iconType';

interface NavItemProps {
  href: string;
  label: string;
  Icon: React.ComponentType<IIconDefaultProps>;
}

function NavItem({ href, label, Icon }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="cursor-pointer flex-shrink-0">
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
