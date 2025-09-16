'use client';

import ErrorDisplay from '@/components/common/error/ErrorDisplay';
import useNavigate from '@/hooks/useNavigate';

export default function NotFound() {
  const { goBack } = useNavigate();

  return (
    <ErrorDisplay
      iconSrc="/assets/icons/icon-404.svg"
      message="페이지를 찾을 수 없습니다. 🥲"
      onGoBack={goBack}
    />
  );
}
