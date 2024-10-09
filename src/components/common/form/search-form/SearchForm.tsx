import { Input } from '@nextui-org/react';
import { FormEvent } from 'react';

interface ISearchForm {
  onSearch: (searchTerm: string) => void;
}

export default function SearchForm({ onSearch }: ISearchForm) {
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSearchSubmit} className="ml-5 flex-grow">
      <Input radius="full" placeholder="계정 검색" isClearable />
    </form>
  );
}
