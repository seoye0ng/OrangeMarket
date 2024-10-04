import Link from 'next/link';
import AuthForm from '@/components/common/form/auth-form/AuthForm';

export default function page() {
  return (
    <>
      <AuthForm type="login" />
      <Link href="/signup">
        <button className="mx-auto mt-4 block p-1 text-12px font-normal text-gray-300">
          이메일로 회원가입
        </button>
      </Link>
    </>
  );
}
