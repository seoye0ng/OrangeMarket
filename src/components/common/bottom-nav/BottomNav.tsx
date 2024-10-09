import bottomNavConfig from '@/config/bottomNavConfig';

import NavItem from './NavItem';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-100 w-full border-t-1 bg-white px-9 py-3">
      <ul className="flex justify-between">
        {Object.entries(bottomNavConfig).map(
          ([href, { label, bottomNavIcon }]) => (
            <NavItem
              key={href}
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
