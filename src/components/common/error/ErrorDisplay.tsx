import Image from 'next/image';

import CustomButton from '@/components/common/button/Button';
import Text from '@/components/common/text/Text';

interface ErrorDisplayProps {
  iconSrc?: string;
  message: string;
  subMessage?: string;
  onRetry?: () => void;
  onGoBack?: () => void;
}

export default function ErrorDisplay({
  iconSrc,
  message,
  subMessage,
  onRetry,
  onGoBack,
}: ErrorDisplayProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {iconSrc && (
        <div className="relative aspect-square w-40">
          <Image
            src={iconSrc}
            alt="에러 아이콘"
            fill
            className="object-cover"
          />
        </div>
      )}
      <Text size="16px" className="mt-2">
        {message}
      </Text>
      {subMessage && (
        <Text size="14px" color="gray-300">
          {subMessage}
        </Text>
      )}
      <div className="flex gap-2">
        <CustomButton
          type="button"
          onClick={onRetry}
          className="max-w-32"
          color="white"
        >
          다시 시도하기
        </CustomButton>
        <CustomButton
          type="button"
          onClick={onGoBack}
          className="max-w-32"
          color="primary"
        >
          이전 페이지
        </CustomButton>
      </div>
    </div>
  );
}
