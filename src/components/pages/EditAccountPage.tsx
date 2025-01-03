'use client';

import '@/__mock__';

import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IEditAccountRequest } from '@/api/types/user';
import ProfileFields from '@/components/common/form/auth-form/ProfileFields';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import useEditAccount from '@/queries/profile/useEditAccount';
import useProfile from '@/queries/profile/useProfile';
import AuthService from '@/services/AuthService';
import useNavigate from '@/hooks/useNavigate';

export default function EditAccountPage({ className }: { className: string }) {
  const accountName = AuthService.getUser() || '';
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();
  const { goTo } = useNavigate();

  const { data: userProfile, isLoading } = useProfile(accountName, {
    enabled: !!accountName,
  });
  const { mutate: editAccount, isSuccess: isEditAccountSuccess } =
    useEditAccount();

  const methods = useForm<IEditAccountRequest>({
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
    if (!userProfile) return;

    methods.reset({
      user: {
        username: userProfile.profile.username,
        accountname: userProfile.profile.accountname,
        intro: userProfile.profile.intro,
        image: userProfile.profile.image,
      },
    });
  }, [userProfile, methods]);

  // 헤더 클릭 이벤트로 폼 제출 처리
  useEffect(() => {
    if (isHeaderClick) {
      methods.handleSubmit((data) => {
        console.log('Data:', data);
        editAccount(data);
      })();
      setIsHeaderClick(false);
    }
  }, [isHeaderClick, methods, setIsHeaderClick, editAccount]);

  useEffect(() => {
    if (isEditAccountSuccess) {
      goTo(`/${accountName}`);
    }
  }, [isEditAccountSuccess]);

  if (!accountName || isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  return (
    <main className={`pt-[30px] ${className}`}>
      <FormProvider {...methods}>
        <form>
          <ProfileFields />
        </form>
      </FormProvider>
    </main>
  );
}
