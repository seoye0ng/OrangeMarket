import BOTTOM_NAV_ITEMS from '@/constants/bottomNavItem';

import NavItem from './NavItem';

export default function BottomNav() {
  return (
    <nav className="px-9 pt-3 pb-2 border-t-1">
      <ul className="flex justify-between">
        {Object.entries(BOTTOM_NAV_ITEMS).map(
          ([key, { label, href, bottomNavIcon: Icon }]) => (
            <NavItem key={key} href={href} label={label} Icon={Icon} />
          ),
        )}
      </ul>
    </nav>
  );
}
