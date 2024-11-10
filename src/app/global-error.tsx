/* eslint-disable jsx-a11y/html-has-lang */

'use client';

import ErrorDisplay from '@/components/common/error/ErrorDisplay';
import { useEffect } from 'react';

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

  const onGoBack = () => {
    window.history.back();
  };

  return (
    <html>
      <body>
        <ErrorDisplay
          iconSrc="/assets/icons/icon-error.svg"
          altText="에러 아이콘"
          message="잠시 뒤에 시도해 주십시오."
          subMessage={error.message}
          onRetry={reset}
          onGoBack={onGoBack}
        />
      </body>
    </html>
  );
}
