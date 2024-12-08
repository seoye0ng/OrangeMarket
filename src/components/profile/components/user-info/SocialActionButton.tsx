import Image from 'next/image';

import IconButton from '@/components/common/button/IconButton';

interface ISocialActionButtons {
  type: '채팅' | '공유';
  onClick?: () => void;
}

const socialActionButtonMaps: { [key: string]: string } = {
  채팅: '/assets/icons/icon-message-circle.svg',
  공유: '/assets/icons/icon-share.svg',
};

export default function SocialActionButton({
  onClick,
  type,
}: ISocialActionButtons) {
  const buttonImage = socialActionButtonMaps[type];
  return (
    <IconButton
      label={`${type} 버튼 아이콘`}
      className="rounded-full border-1 border-gray-100 p-6px"
      onClick={onClick}
    >
      <Image
        src={buttonImage}
        alt={`${type} 버튼 아이콘 이미지`}
        width={20}
        height={20}
      />
    </IconButton>
  );
}
