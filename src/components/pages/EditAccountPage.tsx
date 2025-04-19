'use client';

import '@/__mock__';

import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IEditAccountRequest } from '@/api/types/user';
import ProfileFields from '@/components/common/form/auth-form/ProfileFields';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import useNavigate from '@/hooks/useNavigate';
import useAccountNameValid from '@/queries/auth/useAccountNameValid';
import useEditAccount from '@/queries/profile/useEditAccount';
import useProfile from '@/queries/profile/useProfile';
import AuthService from '@/services/AuthService';

export default function EditAccountPage({ className }: { className: string }) {
  const accountName = AuthService.getUser() || '';
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();

  const [initialAccountName, setInitialAccountName] = useState('');
  const [isAccountAvailable, setIsAccountAvailable] = useState(false);
  const { goTo } = useNavigate();

  const { data: userProfile, isLoading } = useProfile(accountName, {
    enabled: !!accountName,
  });
  const { mutate: accountValid } = useAccountNameValid();
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

  const checkDuplicate = async () => {
    const value = methods.getValues('user.accountname');
    const isValid = await methods.trigger('user.accountname');
    if (!isValid) return;
    accountValid({ user: { accountname: value } });
    setIsAccountAvailable(true);
  };

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

    setInitialAccountName(userProfile.profile.accountname);
  }, [userProfile, methods]);

  // 헤더 클릭 이벤트로 폼 제출 처리
  useEffect(() => {
    if (isHeaderClick) {
      methods.handleSubmit((data) => {
        console.log('Data:', data);
        const currentAccountName = data.user.accountname;

        const isAccountNameChanged = currentAccountName !== initialAccountName;

        // accountname이 변경되었을 경우, 중복 확인을거쳤는지 확인
        if (isAccountNameChanged && !isAccountAvailable) {
          // eslint-disable-next-line no-alert
          alert('계정명을 변경하셨다면 중복 확인을 해주세요.');
          setIsHeaderClick(false);
          return;
        }

        editAccount(data);
      })();
      setIsHeaderClick(false);
    }
  }, [
    isHeaderClick,
    methods,
    setIsHeaderClick,
    editAccount,
    initialAccountName,
    isAccountAvailable,
  ]);

  useEffect(() => {
    if (isEditAccountSuccess) {
      goTo(`/${accountName}`);
    }
  }, [accountName, goTo, isEditAccountSuccess]);

  if (!accountName || isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  return (
    <main className={`pt-[30px] ${className}`}>
      <FormProvider {...methods}>
        <form>
          <ProfileFields
            isDisabled={methods.watch('user.accountname')?.length < 1}
            onClick={() => checkDuplicate()}
          />
        </form>
      </FormProvider>
    </main>
  );
}
