import SignupForm from '@/components/common/form/signup-form/SignupForm';
import Title from '@/components/common/title/Title';

export default function page() {
  return (
    <div className="w-full px-34px">
      <Title padding="pt-30px pb-10" title="이메일로 회원가입" />
      <SignupForm />
    </div>
  );
}
