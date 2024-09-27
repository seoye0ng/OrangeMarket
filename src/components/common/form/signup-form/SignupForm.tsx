import { Button, Input } from '@nextui-org/react';

export default function SignupForm() {
  return (
    <form className="flex-center gap-4">
      {/* 에러 시 isInvalid  ture */}
      <Input
        key="inside"
        type="email"
        label="이메일"
        labelPlacement="inside"
        variant="underlined"
        placeholder="이메일을 입력하세요."
        // isInvalid
        errorMessage="Please enter a valid email"
      />
      <Input
        key="inside"
        type="password"
        label="password"
        labelPlacement="inside"
        variant="underlined"
        placeholder="비밀번호를 입력하세요."
        // isInvalid
        errorMessage="Please enter a valid email"
      />
      <Button radius="full" className="w-full text-white" color="primary">
        다음
      </Button>
    </form>
  );
}
