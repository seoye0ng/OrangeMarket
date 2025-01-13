'use client';

import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import { UnderlineInput } from '@/components/common/input/UnderlineInput';
import { IFields } from '@/config/authFieldConfig';

interface IFieldsLayoutProps {
  className?: string;
  fields: IFields;
  prefix?: 'user' | 'product';
  children?: React.ReactNode | React.ReactNode[]; // 추가 컴포넌트 삽입 가능
}

export default function FieldsLayout({
  className,
  fields,
  prefix = 'user',
  children,
}: IFieldsLayoutProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className={classNames('flex-center gap-4', className)}>
      {children}
      {Object.entries(fields).map(([name, field]) => {
        const inputType =
          {
            email: 'email',
            password: 'password',
            link: 'url',
          }[name] || 'text';

        return (
          <UnderlineInput
            key={`${prefix}.${name}`}
            {...register(`${prefix}.${name}`, field.validation)}
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
