import SignupForm from '@/components/form/signup-form/SignupForm';

export default function page() {
  return (
    <section className="flex-center h-screen space-y-10 px-9">
      <h1>이메일로 회원가입</h1>
      <SignupForm />
    </section>
  );
}
