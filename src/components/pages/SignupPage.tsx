'use client';

import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ISignUpRequest } from '@/api/types/auth';
import CustomButton from '@/components/common/button/Button';
import FormTemplate from '@/components/common/form/auth-form/FormTemplate';
import ImageField from '@/components/common/form/auth-form/ImageField';
import Title from '@/components/common/title/Title';
import { signupFields, profileFields } from '@/config/authFieldConfig';
import { TITLE_TEXT } from '@/constants/titleText';
import useSignup from '@/hooks/queries/auth/useSignup';

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
  const [step, setStep] = useState(1);
  const { mutate } = useSignup();

  // 구조변경으로 props로 하위컴포넌트에 넘겨주지 않기 때문에 useCallback 삭제
  const handleNext = async () => {
    const isValid = await methods.trigger(['email', 'password']); // 특정 필드만 검사
    if (!isValid) {
      console.log('유효성 검사 실패');
      return;
    }
    // email 중복 검증
    // 중복시에 중복 에러메세지 넣어주기
    // 성공시 다음스텝으로
    setStep((currentStep) => currentStep + 1);
    window.history.pushState(null, ''); // 히스토리 스택에 새로운 상태 추가
  };

  // 뒤로 가기 시 이전 step으로 이동 (회원가입 페이지)
  const handleBack = useCallback(() => {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }, [step]);

  useEffect(() => {
    const handlePopState = () => {
      handleBack();
    };

    // popstate 이벤트 감지 (브라우저 뒤로 가기 버튼 감지)
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleBack]);

  const titleInfo = TITLE_TEXT[step === 1 ? 'signup' : 'set-profile'];
  const padding = step === 1 ? 'pt-30px pb-10' : 'py-30px';

  const onSubmit = (data: ISignUpRequest) => {
    console.log('성공', data);
    mutate(data);
  };

  return (
    <>
      <Title
        padding={padding}
        title={titleInfo.title}
        description={titleInfo.description}
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 ? (
            <FormTemplate fields={signupFields} />
          ) : (
            <FormTemplate fields={profileFields}>
              <ImageField />
            </FormTemplate>
          )}
          <CustomButton
            type={step === 1 ? 'button' : 'submit'}
            color="primary"
            size="l"
            radius="full"
            className="mt-30px"
            onClick={step === 1 ? handleNext : undefined}
          >
            {step === 1 ? '다음' : '오렌지마켓 시작하기'}
          </CustomButton>
        </form>
      </FormProvider>
    </>
  );
}
