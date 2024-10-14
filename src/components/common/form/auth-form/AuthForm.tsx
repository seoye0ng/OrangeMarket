/* eslint-disable no-useless-escape */

'use client';

import { useFormContext } from 'react-hook-form';

import { UnderlineInput } from '@/components/common/input/UnderlineInput';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const authFields = {
  signup: {
    email: {
      label: '이메일',
      placeholder: '이메일을 설정해주세요.',
    },
    password: {
      label: '비밀번호',
      placeholder: '비밀번호를 설정해주세요.',
    },
  },

  login: {
    email: {
      label: '이메일',
      placeholder: '이메일을 입력하세요.',
    },
    password: {
      label: '비밀번호',
      placeholder: '비밀번호를 입력하세요.',
    },
  },
};

export default function AuthForm({ type }: AuthFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fields = authFields[type];

  return (
    <fieldset className="flex-center gap-4">
      {Object.entries(fields).map(([name, field]) => (
        <UnderlineInput
          key={name}
          {...register(name)}
          isClearable
          variant="underlined"
          type={name}
          label={field.label}
          placeholder={field.placeholder}
          isInvalid={!!errors[name]}
          errorMessage={errors[name]?.message?.toString()}
        />
      ))}
    </fieldset>
  );
}
