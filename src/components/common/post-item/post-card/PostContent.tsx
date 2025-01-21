import classNames from 'classnames';

import { IPost } from '@/api/types/post';
import CustomImage from '@/components/common/custom-image/CustomImage';

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
        <CustomImage
          imageSrc={image}
          className={classNames('rounded-10px', {
            'aspect-[4/3] max-h-[228px] w-full': isListType,
            'aspect-square': !isListType,
          })}
        />
      )}
    </>
  );
}
