'use client';

import { useFormContext } from 'react-hook-form';

import { UnderlineInput } from '@/components/common/input/UnderlineInput';
import { IFields } from '@/config/authFieldConfig';

interface FormTemplateProps {
  fields: IFields;
  children?: React.ReactNode; // 추가적인 컴포넌트(프로필 사진) 받을 수 있음
}

export default function FormTemplate({ fields, children }: FormTemplateProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="flex-center gap-4">
      {children}
      {Object.entries(fields).map(([name, field]) => {
        const inputType =
          {
            email: 'email',
            password: 'password',
          }[name] || 'text';

        return (
          <UnderlineInput
            key={name}
            {...register(name, field.validation)}
            isClearable
            variant="underlined"
            type={inputType}
            label={field.label}
            placeholder={field.placeholder}
            isInvalid={!!errors[name]}
            errorMessage={errors[name]?.message?.toString()}
          />
        );
      })}
    </fieldset>
  );
}
