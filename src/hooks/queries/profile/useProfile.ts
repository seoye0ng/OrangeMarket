import { useQuery } from '@tanstack/react-query';

import { profile } from '@/api/apiRequests/profile';
import { profileKeys } from '@/queries/profile/profileKeys';

function useProfile(accountName: string) {
  return useQuery({
    queryKey: profileKeys.detail(accountName),
    queryFn: () => profile(accountName),
  });
}

export default useProfile;
