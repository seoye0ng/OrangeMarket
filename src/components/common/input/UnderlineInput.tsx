import { Input } from '@nextui-org/react';
import classNames from 'classnames';
import { useMemo } from 'react';

interface UnderlineInputProps {
  type: string;
  label: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

const baseStyles = {
  label: 'pb-1 font-midium text-gray-300',
  input:
    'group-data-[has-value=true]:text-black font-normal text-14px placeholder:text-gray-100',
  innerWrapper: 'pb-2',
  inputWrapper:
    'py-0 border-b-0 shadow-[0_1px_0px_0_#DBDBDB] hover:shadow-[0_1px_0px_0_#C4C4C4] after:h-[1px] after:bg-primary-100 group-data-[focus=true]:shadow-none',
  errorMessage: 'text-12px text-warning',
};

const getInvalidStyles = (isInvalid: boolean) => ({
  label: classNames({ 'text-warning': isInvalid }),
  input: classNames({ 'text-warning': isInvalid }),
  inputWrapper: classNames({
    'after:bg-warning hover:shadow-[0_1px_0px_0_#EB5757] shadow-[0_1px_0px_0_#EB5757]':
      isInvalid,
  }),
});

export default function UnderlineInput({
  type,
  label,
  placeholder,
  isInvalid = false,
  errorMessage,
}: UnderlineInputProps) {
  // isInvalid가 변경될 때만 getDynamicStyles가 다시 계산됨
  const invalidStyles = useMemo(() => getInvalidStyles(isInvalid), [isInvalid]);

  return (
    <Input
      isClearable
      key="inside"
      type={type}
      label={label}
      labelPlacement="inside"
      variant="underlined"
      placeholder={placeholder}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      classNames={{
        label: classNames(baseStyles.label, invalidStyles.label),
        input: classNames(baseStyles.input, invalidStyles.input),
        innerWrapper: baseStyles.innerWrapper,
        inputWrapper: classNames(
          baseStyles.inputWrapper,
          invalidStyles.inputWrapper,
        ),
        errorMessage: baseStyles.errorMessage,
      }}
    />
  );
}
