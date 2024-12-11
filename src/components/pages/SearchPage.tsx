/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';

import '@/__mock__';

import { IUserProfileBase } from '@/api/types/user';
import UserCard from '@/components/common/post-item/user-card/UserCard';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import { useSearchContext } from '@/context/provider/SearchContext';
import useSearch from '@/hooks/queries/search/useSearch';

import EmptyState from '../profile/components/empty-state/EmptyState';

export default function SearchPage() {
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();
  const { searchTerm } = useSearchContext();

  const {
    data: userList,
    refetch,
    isError,
  } = useSearch(searchTerm, { enabled: false });

  useEffect(() => {
    if (isHeaderClick && searchTerm) {
      refetch();
    }
    return () => {
      setIsHeaderClick(false);
    };
  }, [isHeaderClick]);

  if (isError) {
    return <EmptyState className="mx-4" message="유저가 없습니다." />;
  }

  return (
    <main className="mt-5 px-4">
      {userList?.map((user: IUserProfileBase) => (
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
