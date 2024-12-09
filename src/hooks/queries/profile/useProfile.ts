import { useQuery } from '@tanstack/react-query';

import { profile } from '@/api/apiRequests/profile';

function useProfile(accountname: string) {
  return useQuery({
    queryKey: ['profile', accountname],
    queryFn: () => profile(accountname),
  });
}

export default useProfile;
