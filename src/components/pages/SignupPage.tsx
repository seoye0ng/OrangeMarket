'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { ISignUpRequest } from '@/api/types/auth';
import CustomButton from '@/components/common/button/Button';
import ProfileFields from '@/components/common/form/auth-form/ProfileFields';
import SignupFields from '@/components/common/form/auth-form/SignupFields';
import Title from '@/components/common/title/Title';
import { TITLE_TEXT } from '@/constants/titleText';
import useSignup from '@/hooks/queries/auth/useSignup';
import useHistorySync from '@/hooks/useHistorySync';
import useSteps from '@/hooks/useSteps';

export default function SignupPage() {
  const methods = useForm<ISignUpRequest>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      accountname: '',
      username: '',
      image: '',
      intro: '',
    },
  });

  const { mutate } = useSignup();
  const { step, goToNextStep, goToPreviousStep } = useSteps(1, 2);
  const { pushState } = useHistorySync(goToPreviousStep);

  const handleNext = async () => {
    const isValid = await methods.trigger(['email', 'password']); // 특정 필드만 검사
    if (!isValid) {
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
          {isFirstStep ? <SignupFields /> : <ProfileFields />}
          <CustomButton
            type={isFirstStep ? 'button' : 'submit'}
            color="primary"
            size="l"
            radius="full"
            className="mt-30px"
            onClick={isFirstStep ? handleNext : undefined}
          >
            {isFirstStep ? '다음' : '오렌지마켓 시작하기'}
          </CustomButton>
        </form>
      </FormProvider>
    </>
  );
}
