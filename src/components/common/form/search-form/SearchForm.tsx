'use client';

import { Input } from '@nextui-org/react';
import { useRef, FormEvent } from 'react';

interface ISearchForm {
  onSearch: (searchTerm: string) => void;
}

export default function SearchForm({ onSearch }: ISearchForm) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = inputRef.current?.value || '';
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="ml-5 flex-grow">
      <Input radius="full" ref={inputRef} placeholder="계정 검색" isClearable />
    </form>
  );
}
