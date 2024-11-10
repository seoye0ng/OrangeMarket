/* eslint-disable jsx-a11y/html-has-lang */

'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import CustomButton from '@/components/common/button/Button';
import Text from '@/components/common/text/Text';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <html>
      <body>
        <div className="flex h-screen flex-col items-center justify-center gap-3">
          <div className="relative aspect-square w-40">
            <Image
              src="/assets/icons/icon-error.svg"
              alt="에러아이콘"
              fill
              className="object-cover"
            />
          </div>
          <Text size="16px" className="mt-2">
            잠시 뒤에 시도해 주십시오.
          </Text>
          <Text size="14px" color="gray-300">
            {error.message}
          </Text>
          <div className="flex gap-2">
            <CustomButton
              type="button"
              onClick={() => reset()}
              className="max-w-32"
              color="white"
            >
              다시 시도하기
            </CustomButton>
            <CustomButton
              type="button"
              onClick={handleGoBack}
              className="max-w-32"
              color="primary"
            >
              이전 페이지
            </CustomButton>
          </div>
        </div>
      </body>
    </html>
  );
}
