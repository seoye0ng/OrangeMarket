/* eslint-disable no-nested-ternary */

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
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <fieldset className="flex-center gap-4">
      {children}
      {Object.entries(fields).map(([name, field]) => {
        // 필드가 터치되었을 때만 에러 표시
        const hasError = touchedFields[name] && errors[name];

        return (
          <UnderlineInput
            key={name}
            {...register(name, field.validation)}
            isClearable
            variant="underlined"
            type={
              name === 'email'
                ? 'email'
                : name === 'password'
                  ? 'password'
                  : 'text'
            }
            label={field.label}
            placeholder={field.placeholder}
            isInvalid={!!hasError}
            errorMessage={errors[name]?.message?.toString()}
          />
        );
      })}
    </fieldset>
  );
}
