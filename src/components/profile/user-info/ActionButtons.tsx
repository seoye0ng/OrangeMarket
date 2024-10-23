import Image from 'next/image';
import CustomButton from '@/components/common/button/Button';
import IconButton from '@/components/common/button/IconButton';

interface IActionButtons {
  type: 'user' | 'otherUser';
}
export const ActionButtons = ({ type }: IActionButtons) => {
  if (type === 'otherUser') {
    return (
      <div className="flex items-center gap-10px">
        <IconButton
          label="채팅 버튼 아이콘"
          className="rounded-full border-1 border-gray-100 p-6px"
        >
          <Image
            src="/assets/icons/icon-message-circle.svg"
            alt="채팅 버튼 아이콘 이미지"
            width={20}
            height={20}
          />
        </IconButton>
        <CustomButton size="ml" color="primary">
          팔로우
        </CustomButton>
        <IconButton
          label="공유 버튼 아이콘"
          className="rounded-full border-1 border-gray-100 p-6px"
        >
          <Image
            src="/assets/icons/icon-share.svg"
            alt="공유 버튼 아이콘 이미지"
            width={20}
            height={20}
          />
        </IconButton>
      </div>
    );
  }

  if (type === 'user') {
    return (
      <div className="flex gap-3">
        <CustomButton size="ml" color="white">
          프로필 수정
        </CustomButton>
        <CustomButton size="m" color="white">
          상품 등록
        </CustomButton>
      </div>
    );
  }

  return null;
};
