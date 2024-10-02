import { CustomButton } from '@/components/common/button/Button';
import { UnderlineInput } from '@/components/common/input/UnderlineInput';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type = 'signup' }: AuthFormProps) {
  return (
    <form className="flex-center gap-30px">
      <div className="flex-center gap-4">
        {/* 에러 시 isInvalid  ture */}
        <UnderlineInput
          isClearable
          variant="underlined"
          type="email"
          label="이메일"
          placeholder="이메일을 입력하세요."
        />
        <UnderlineInput
          isClearable
          variant="underlined"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요."
        />
        {type === 'signup' && (
          <UnderlineInput
            isClearable
            variant="underlined"
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력하세요."
          />
        )}
      </div>
      <CustomButton color="primary" size="l" radius="full">
        {type === 'signup' ? '다음' : '로그인'}
      </CustomButton>
    </form>
  );
}
