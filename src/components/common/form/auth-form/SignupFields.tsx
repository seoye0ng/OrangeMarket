import { signupFields } from '@/config/authFieldConfig';

import FieldsLayout from './FieldsLayout';

export default function SignupFields() {
  return <FieldsLayout fields={signupFields} />;
}
