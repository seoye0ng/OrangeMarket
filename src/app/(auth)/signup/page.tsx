'use client';

import AuthForm from '@/components/common/form/auth-form/AuthForm';
import ProfileForm from '@/components/common/form/auth-form/ProfileForm';
import Title from '@/components/common/title/Title';
import { titleText } from '@/constants/titleText';
import { useState } from 'react';

export default function page() {
  const [step, setStep] = useState(1);

  // 다음 버튼을 눌렀을 때 next step으로 이동 (프로필 설정 페이지)
  const handleNext = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const titleInfo = titleText[step === 1 ? 'signup' : 'set-profile'];
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
