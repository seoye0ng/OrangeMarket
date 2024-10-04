'use client';

import AuthForm from '@/components/common/form/auth-form/AuthForm';
import ProfileForm from '@/components/common/form/auth-form/ProfileForm';
import Title from '@/components/common/title/Title';
import { TITLE_TEXT } from '@/constants/titleText';
import { useCallback, useEffect, useState } from 'react';

export default function page() {
  const [step, setStep] = useState(1);

  // 다음 버튼을 눌렀을 때 next step으로 이동 (프로필 설정 페이지)
  const handleNext = useCallback(() => {
    setStep((currentStep) => currentStep + 1);
    window.history.pushState(null, ''); // 히스토리 스택에 새로운 상태 추가
  }, []);

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

  return (
    <>
      <Title
        padding={padding}
        title={titleInfo.title}
        description={titleInfo.description}
      />
      {step === 1 && <AuthForm type="signup" onNext={handleNext} />}
      {step === 2 && <ProfileForm />}
    </>
  );
}
