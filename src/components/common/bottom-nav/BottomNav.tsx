import BOTTOM_NAV_ITEMS from '@/constants/bottomNavItem';

import NavItem from './NavItem';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-100 w-full border-t-1 bg-white px-9 py-3">
      <ul className="flex justify-between">
        {Object.entries(BOTTOM_NAV_ITEMS).map(
          ([key, { label, href, bottomNavIcon }]) => (
            <NavItem
              key={key}
              href={href}
              label={label}
              bottomNavIcon={bottomNavIcon}
            />
          ),
        )}
      </ul>
    </nav>
  );
}
