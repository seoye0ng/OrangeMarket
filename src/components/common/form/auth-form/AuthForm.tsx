import { CustomButton } from '@/components/common/button/Button';
import { UnderlineInput } from '@/components/common/input/UnderlineInput';

interface AuthFormProps {
  type: 'login' | 'signup';
  onNext?: () => void; // 버튼 클릭 시 호출할 함수
}

const authFields = [
  { type: 'email', label: '이메일', placeholder: '이메일을 입력하세요.' },
  {
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
  },
];

export default function AuthForm({ type, onNext }: AuthFormProps) {
  return (
    <form className="flex-center gap-30px">
      <div className="flex-center gap-4">
        {/* 에러 시 isInvalid  ture */}
        {authFields.map((field) => (
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
      <CustomButton onClick={onNext} color="primary" size="l" radius="full">
        {type === 'signup' ? '다음' : '로그인'}
      </CustomButton>
    </form>
  );
}
