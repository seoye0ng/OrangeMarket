/* eslint-disable jsx-a11y/html-has-lang */

'use client';

import { useEffect } from 'react';

import ErrorDisplay from '@/components/common/error/ErrorDisplay';
import useNavigate from '@/hooks/useNavigate';

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

  const { goBack } = useNavigate();

  return (
    <html>
      <body>
        <ErrorDisplay
          iconSrc="/assets/icons/icon-error.svg"
          message="잠시 뒤에 시도해 주십시오."
          subMessage={error.message}
          onRetry={reset}
          onGoBack={goBack}
        />
      </body>
    </html>
  );
}
