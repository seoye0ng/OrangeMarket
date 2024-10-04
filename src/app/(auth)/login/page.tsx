import Link from 'next/link';
import AuthForm from '@/components/common/form/auth-form/AuthForm';
import Title from '@/components/common/title/Title';
import { TITLE_TEXT } from '@/constants/titleText';

export default function page() {
  return (
    <>
      <Title
        padding="pt-30px pb-10"
        title={TITLE_TEXT.login.title}
        description={TITLE_TEXT.login.description}
      />
      <AuthForm type="login" />
      <Link href="/signup">
        <button className="mx-auto mt-4 block p-1 text-12px font-normal text-gray-300">
          이메일로 회원가입
        </button>
      </Link>
    </>
  );
}
