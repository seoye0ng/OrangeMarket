import classNames from 'classnames';
import Image from 'next/image';

import { IPost } from '@/api/types/post';

interface IPostContentProps {
  isListType?: boolean;
  content?: IPost['content'];
  image?: IPost['image'];
}

export default function PostContent({
  isListType = true,
  content,
  image,
}: IPostContentProps) {
  return (
    <>
      {content && (
        <div className="my-4 text-14px font-normal leading-17px">{content}</div>
      )}
      {image && (
        <div
          className={classNames('relative overflow-hidden rounded-10px', {
            'aspect-[4/3] max-h-[228px] w-full': isListType,
            'aspect-square': !isListType,
          })}
        >
          <Image
            src={image}
            sizes="100vw"
            alt="이미지"
            fill
            className="object-cover"
          />
        </div>
      )}
    </>
  );
}
