import bottomNavConfig from '@/config/bottomNavConfig';
import AuthService from '@/services/AuthService';

import NavItem from './NavItem';

export default function BottomNav() {
  const accountName = AuthService.getUser();

  return (
    <nav className="fixed bottom-0 z-10 w-full border-t-1 bg-white px-9 py-3">
      <ul className="flex justify-between">
        {bottomNavConfig.map(({ href, label, bottomNavIcon }) => (
          <NavItem
            key={label}
            href={label === '프로필' ? `${href}${accountName}` : href}
            label={label}
            bottomNavIcon={bottomNavIcon}
          />
        ))}
      </ul>
    </nav>
  );
}
