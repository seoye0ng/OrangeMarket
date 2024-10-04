import { CustomButton } from '@/components/common/button/Button';
import { UnderlineInput } from '@/components/common/input/UnderlineInput';

const profileFields = [
  {
    type: 'text',
    label: '사용자 이름',
    placeholder: '2~10자 이내여야 합니다.',
  },
  {
    type: 'email',
    label: '계정 ID',
    placeholder: '영문, 숫자, 특수문자(.), (_)만 사용 가능합니다..',
  },
  {
    type: 'text',
    label: '소개',
    placeholder: '자신과 판매할 상품에 대해 소개해 주세요!.',
  },
];

export default function ProfileForm() {
  return (
    <form className="flex-center gap-30px" onSubmit={() => '가입완!'}>
      <div>
        <label htmlFor="profile-upload" className="relative">
          <img src="/assets/icons/basic-profile-img-.svg" alt="프로필 이미지" />
          <img
            src="/assets/icons/upload-file.svg"
            alt="프로필 이미지"
            className="absolute bottom-0 right-0 w-9"
          />
        </label>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profile-upload"
        />
      </div>
      <div className="flex-center gap-4">
        {/* 에러 시 isInvalid  ture */}
        {profileFields.map((field) => (
          <UnderlineInput
            key={field.type}
            isClearable
            variant="underlined"
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <CustomButton color="primary" size="l" radius="full">
        감귤마켓 시작하기
      </CustomButton>
    </form>
  );
}
