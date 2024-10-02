import AuthForm from '@/components/common/form/auth-form/AuthForm';
import Title from '@/components/common/title/Title';

export default function page() {
  return (
    <div className="w-full px-34px">
      <Title padding="pt-30px pb-10" title="로그인" />
      <AuthForm type="login" />
    </div>
  );
}
