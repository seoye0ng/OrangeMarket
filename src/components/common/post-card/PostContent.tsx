import Image from 'next/image';

import { IPost } from '@/api/types/post';

interface IPostContentProps {
  content: IPost['content'];
  image: IPost['image'];
}

export default function PostContent({ content, image }: IPostContentProps) {
  return (
    <>
      <div className="my-4 text-14px font-normal leading-17px">{content}</div>
      {image && (
        <div className="rounded-10px relative aspect-[4/3] max-h-[228px] w-full overflow-hidden">
          <Image
            src={image}
            sizes="100vw"
            alt="이미지"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      )}
    </>
  );
}
