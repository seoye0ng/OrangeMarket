'use client';

import Image from 'next/image';

import CustomButton from '@/components/common/button/Button';

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
      <p className="mb-5 mt-7 text-14px font-normal text-gray-300">
        페이지를 찾을 수 없습니다. 🥲
      </p>
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
