import { Input } from '@nextui-org/react';
import classNames from 'classnames';

interface UnderlineInputProps {
  type: string;
  label: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

const styles = (isInvalid: boolean) => ({
  label: classNames('pb-1 font-midium text-gray-300', {
    'text-warning': isInvalid,
  }),
  input: classNames(
    'group-data-[has-value=true]:text-black font-normal text-14px placeholder:text-gray-100',
    { 'text-warning': isInvalid },
  ),
  innerWrapper: 'pb-2',
  inputWrapper: classNames(
    'py-0 border-b-0 shadow-[0_1px_0px_0_#DBDBDB] hover:shadow-[0_1px_0px_0_#C4C4C4] after:h-[1px] after:bg-primary-100 group-data-[focus=true]:shadow-none',
    {
      'after:bg-warning hover:shadow-[0_1px_0px_0_#EB5757] shadow-[0_1px_0px_0_#EB5757]':
        isInvalid,
    },
  ),
  errorMessage: 'text-12px text-warning',
});

export default function UnderlineInput({
  type,
  label,
  placeholder,
  isInvalid = false,
  errorMessage,
}: UnderlineInputProps) {
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
      classNames={styles(isInvalid)}
    />
  );
}
