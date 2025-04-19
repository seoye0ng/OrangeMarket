import { Button } from '@nextui-org/react';

import { signupFields } from '@/config/authFieldConfig';

import FieldsLayout from './FieldsLayout';

interface ISignupFields {
  isDisabled: boolean;
  onClick: () => void;
}

export default function SignupFields({ isDisabled, onClick }: ISignupFields) {
  return (
    <FieldsLayout
      fields={signupFields}
      customElement={{
        email: (
          <Button
            isDisabled={isDisabled}
            color="primary"
            onPress={onClick}
            className="px-1 text-white"
          >
            중복확인
          </Button>
        ),
      }}
    />
  );
}
