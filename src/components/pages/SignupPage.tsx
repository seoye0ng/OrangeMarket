/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ISignUpRequest } from '@/api/types/auth';
import CustomButton from '@/components/common/button/Button';
import ProfileFields from '@/components/common/form/auth-form/ProfileFields';
import SignupFields from '@/components/common/form/auth-form/SignupFields';
import Title from '@/components/common/title/Title';
import { TITLE_TEXT } from '@/constants/titleText';
import useHistorySync from '@/hooks/useHistorySync';
import useNavigate from '@/hooks/useNavigate';
import useSteps from '@/hooks/useSteps';
import useAccountNameValid from '@/queries/auth/useAccountNameValid';
import useEmailValid from '@/queries/auth/useEmailValid';
import useSignup from '@/queries/auth/useSignup';

export default function SignupPage() {
  const { goTo } = useNavigate();
  const methods = useForm<ISignUpRequest>({
    mode: 'onBlur',
    defaultValues: {
      user: {
        email: '',
        password: '',
        accountname: '',
        username: '',
        image: '',
        intro: '',
      },
    },
  });

  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [isAccountAvailable, setIsAccountAvailable] = useState(false);

  const { mutate: emailValid } = useEmailValid();
  const { mutate: accountValid } = useAccountNameValid();
  const { mutate: signup, error, isError } = useSignup();
  const { step, goToNextStep, goToPreviousStep } = useSteps(1, 2);
  const { pushState } = useHistorySync(goToPreviousStep);

  const isFirstStep = step === 1;
  const titleInfo = TITLE_TEXT[isFirstStep ? 'signup' : 'set-profile'];

  const checkDuplicate = async (
    field: 'email' | 'accountname',
    validateFn: (args: any) => void,
    onSuccess?: () => void,
  ) => {
    const value = methods.getValues(`user.${field}`);
    const isValid = await methods.trigger(`user.${field}`);
    if (!isValid) return;
    validateFn({ user: { [field]: value } });
    onSuccess?.();
  };

  const handleNext = async () => {
    const isValid = await methods.trigger(['user.email', 'user.password']); // 특정 필드만 검사
    if (!isValid || !isEmailAvailable) {
      console.log('유효성 검사 실패');
      return;
    }
    goToNextStep();
    pushState(); // 브라우저 히스토리에 상태 추가
  };

  const onSubmit = async (data: ISignUpRequest) => {
    console.log('성공', data);
    const isValid = await methods.trigger([
      'user.accountname',
      'user.username',
    ]);
    if (!isValid || !isAccountAvailable) {
      console.log('유효성 검사 실패');
      return;
    }
    signup(data);
    if (isError) {
      console.error(error);
      return;
    }
    goTo('/login');
  };

  return (
    <>
      <Title
        padding={isFirstStep ? 'pt-30px pb-10' : 'py-30px'}
        title={titleInfo.title}
        description={titleInfo.description}
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {isFirstStep ? (
            <SignupFields
              isDisabled={methods.watch('user.email')?.length < 1}
              onClick={() =>
                checkDuplicate('email', emailValid, () =>
                  setIsEmailAvailable(true),
                )
              }
            />
          ) : (
            <ProfileFields
              isDisabled={methods.watch('user.accountname')?.length < 1}
              onClick={() =>
                checkDuplicate('accountname', accountValid, () =>
                  setIsAccountAvailable(true),
                )
              }
            />
          )}
          <CustomButton
            type={isFirstStep ? 'button' : 'submit'}
            color="primary"
            size="l"
            radius="full"
            className="mt-30px"
            onPress={isFirstStep ? handleNext : undefined}
          >
            {isFirstStep ? '다음' : '오렌지마켓 시작하기'}
          </CustomButton>
        </form>
      </FormProvider>
    </>
  );
}
