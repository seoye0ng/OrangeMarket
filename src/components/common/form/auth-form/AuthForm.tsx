import { Button } from '@nextui-org/react';

import UnderlineInput from '@/components/common/input/UnderlineInput';

export default function AuthForm() {
  return (
    <form className="flex-center gap-4">
      {/* 에러 시 isInvalid  ture */}
      <UnderlineInput
        type="email"
        label="이메일"
        placeholder="이메일을 입력하세요."
      />
      <UnderlineInput
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
      />
      <Button radius="full" className="mt-4 w-full text-white" color="primary">
        다음
      </Button>
    </form>
  );
}
