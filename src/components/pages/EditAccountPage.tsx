'use client';

import '@/__mock__';

import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IAccountEditRequest } from '@/api/types/auth';
import ProfileFields from '@/components/common/form/auth-form/ProfileFields';
import useProfile from '@/queries/profile/useProfile';
import AuthService from '@/services/AuthService';

export default function EditAccountPage() {
  const accountName = AuthService.getUser() || '';
  const { data: userProfile, isLoading } = useProfile(accountName, {
    enabled: !!accountName,
  });

  const methods = useForm<IAccountEditRequest>({
    mode: 'onBlur',
    defaultValues: {
      user: {
        username: '',
        accountname: '',
        intro: '',
        image: '',
      },
    },
  });

  // 데이터가 로드되면 폼 값 업데이트. useEffect를 사용해 데이터가 변경될 때만 reset 호출
  useEffect(() => {
    if (userProfile) {
      methods.reset({
        user: {
          username: userProfile.profile.username,
          accountname: userProfile.profile.accountname,
          intro: userProfile.profile.intro,
          image: userProfile.profile.image,
        },
      });
    }
  }, [userProfile, methods]);

  if (!accountName || isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  if (userProfile) {
    return (
      <div className="pt-[30px]">
        <FormProvider {...methods}>
          <ProfileFields />
        </FormProvider>
      </div>
    );
  }
}
