import classNames from 'classnames';

import IconButton from '@/components/common/button/IconButton';
import CustomImage from '@/components/common/custom-image/CustomImage';

interface IPreviewImageProps {
  className?: string;
  previewUrl: string;
  onClick?: () => void;
}

export default function PreviewImage({
  className,
  previewUrl,
  onClick,
}: IPreviewImageProps) {
  return (
    <div className={classNames('relative', className)}>
      <CustomImage
        className="inset-0 h-full w-full rounded-10px"
        imageSrc={previewUrl}
        alt="업로드 이미지 미리보기"
      />
      <IconButton
        label="삭제 버튼"
        className="absolute right-6px top-6px"
        onClick={onClick}
        imageSrc="/assets/icons/x.svg"
        imageWidth={22}
        imageHeight={22}
      />
    </div>
  );
}
