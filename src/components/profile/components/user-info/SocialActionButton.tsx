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
      className="border-all-gray rounded-full p-6px"
      onClick={onClick}
      imageSrc={buttonImage}
      imageWidth={20}
      imageHeight={20}
    />
  );
}
