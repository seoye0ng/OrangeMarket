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
import useSteps from '@/hooks/useSteps';
import useEmailValid from '@/queries/auth/useEmailValid';
import useSignup from '@/queries/auth/useSignup';

export default function SignupPage() {
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

  const { mutate: checkEmailValid } = useEmailValid();
  const { mutate } = useSignup();
  const { step, goToNextStep, goToPreviousStep } = useSteps(1, 2);
  const { pushState } = useHistorySync(goToPreviousStep);

  const handleEmailAvailableCheck = async () => {
    const email = methods.getValues('user.email'); // 입력된 이메일 값 가져오기
    await methods.trigger('user.email'); // react-hook-form의 유효성 검사 실행
    checkEmailValid({ user: { email } });
    setIsEmailAvailable(true); // 이메일 사용 가능 상태로 설정
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

  const onSubmit = (data: ISignUpRequest) => {
    console.log('성공', data);
    mutate(data);
  };

  const isFirstStep = step === 1;
  const titleInfo = TITLE_TEXT[isFirstStep ? 'signup' : 'set-profile'];

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
              onClick={handleEmailAvailableCheck}
            />
          ) : (
            <ProfileFields />
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
