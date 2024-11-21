import classNames from 'classnames';
import Image from 'next/image';

import IconButton from '@/components/common/button/IconButton';

interface IPreviewImageProps {
  className: string;
  previewUrl: string;
  onClick: () => void;
}

export default function PreviewImage({
  className,
  previewUrl,
  onClick,
}: IPreviewImageProps) {
  return (
    <article className={classNames('relative', className)}>
      <div className="relative h-full w-full overflow-hidden rounded-10px">
        <Image
          src={previewUrl}
          alt="업로드 이미지 미리보기"
          priority // LCP 최적화
          fill
          className="object-cover"
        />
      </div>
      <IconButton
        label="삭제 버튼"
        className="absolute right-6px top-6px"
        onClick={onClick}
      >
        <Image
          src="/assets/icons/x.svg"
          alt="삭제 아이콘 이미지"
          width={22}
          height={22}
        />
      </IconButton>
    </article>
  );
}
