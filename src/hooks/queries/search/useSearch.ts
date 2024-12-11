import { useQuery } from '@tanstack/react-query';

import { search } from '@/api/apiRequests/search';

function useSearch(keyword: string, options = {}) {
  return useQuery({
    queryKey: ['search', keyword],
    queryFn: () => search(keyword),
    enabled: !!keyword,
    ...options,
  });
}

export default useSearch;
