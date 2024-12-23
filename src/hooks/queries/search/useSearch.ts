import { useQuery } from '@tanstack/react-query';

import { search } from '@/api/apiRequests/search';
import { searchKeys } from '@/queries/search/searchKeys';

function useSearch(keyword: string, options = {}) {
  return useQuery({
    queryKey: searchKeys.list(keyword),
    queryFn: () => search(keyword),
    enabled: !!keyword,
    ...options,
  });
}

export default useSearch;
