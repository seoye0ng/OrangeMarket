'use client';

import Image from 'next/image';

import CustomButton from '@/components/common/button/Button';
import Text from '@/components/common/text/Text';

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="relative aspect-square w-40">
        <Image
          src="/assets/icons/icon-404.svg"
          alt="404 아이콘 이미지"
          fill
          className="object-cover"
        />
      </div>
      <Text size="14px" color="gray-300">
        페이지를 찾을 수 없습니다. 🥲
      </Text>
      <CustomButton
        type="button"
        onClick={handleGoBack}
        className="max-w-32"
        color="primary"
      >
        이전 페이지
      </CustomButton>
    </main>
  );
}
