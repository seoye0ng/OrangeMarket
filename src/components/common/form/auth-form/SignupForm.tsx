import { signupFields } from '@/config/authFieldConfig';

import FormTemplate from './FormTemplate';

export default function SignupForm() {
  return <FormTemplate fields={signupFields} />;
}
