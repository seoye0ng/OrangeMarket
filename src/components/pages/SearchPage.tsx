/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';

import { userList } from '@/__mock__/responseData/userList';
import { IUserProfileBase } from '@/api/types/user';
import UserCard from '@/components/common/post-item/user-card/UserCard';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import { useSearchContext } from '@/context/provider/SearchContext';

export default function SearchPage() {
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();
  const { searchTerm, setSearchTerm } = useSearchContext();

  useEffect(() => {
    if (isHeaderClick && searchTerm) {
      // search(searchTerm);
      console.log('searchTerm', searchTerm);
    }
    return () => {
      setIsHeaderClick(false);
      setSearchTerm('');
    };
  }, [isHeaderClick]);

  return (
    <main className="mt-5 px-4">
      {userList.map((user: IUserProfileBase) => (
        <UserCard
          key={user.accountname}
          className="mb-5"
          imageSize="42px"
          userProfile={user}
        />
      ))}
    </main>
  );
}
