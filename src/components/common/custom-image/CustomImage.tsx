import classNames from 'classnames';
import Image from 'next/image';

interface ICustomImageProps {
  imageSrc: string;
  className?: string;
  alt?: string;
}

export default function CustomImage({
  imageSrc,
  className,
  alt = '이미지',
}: ICustomImageProps) {
  return (
    <div className={classNames('relative overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}
