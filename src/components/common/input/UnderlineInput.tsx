import { Input } from '@nextui-org/react';

interface UnderlineInputProps {
  type: string;
  label: string;
  placeholder: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

const styles = {
  label: 'pb-1',
  input:
    'group-data-[has-value=true]:text-black font-normal text-16px placeholder:text-gray-100',
  innerWrapper: 'pb-2',
  inputWrapper:
    'py-0 after:bg-primary-100 after:h-[1.5px] border-b-1 border-gray-100 hover:border-gray-200',
};

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
      classNames={styles}
    />
  );
}
