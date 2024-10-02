import { Button } from '@nextui-org/react';

import { UnderlineInput } from '@/components/common/input/UnderlineInput';

export default function AuthForm() {
  return (
    <form className="flex-center gap-4">
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
      <Button radius="full" color="primary">
        확인
      </Button>
    </form>
  );
}
