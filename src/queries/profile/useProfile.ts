import { useQuery } from '@tanstack/react-query';

import { profile } from '@/api/apiRequests/profile';
import { profileKeys } from '@/queries/profile/profileKeys';

function useProfile(accountName: string, options = {}) {
  return useQuery({
    queryKey: profileKeys.detail(accountName),
    queryFn: () => profile(accountName),
    ...options,
  });
}

export default useProfile;
