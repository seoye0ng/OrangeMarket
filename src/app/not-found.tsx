'use client';

import Image from 'next/image';

import CustomButton from '@/components/common/button/Button';
import Text from '@/components/common/text/Text';

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="h-screen pt-52 text-center">
      <Image
        src="/assets/icons/icon-404.svg"
        alt="404 아이콘 이미지"
        width={158}
        height={158}
        className="mx-auto"
      />
      <Text weight="normal" size="14px" color="gray-300">
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
