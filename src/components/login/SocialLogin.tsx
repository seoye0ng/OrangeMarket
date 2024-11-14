import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { CustomButton, TextButton } from '@/components/common/button';

interface ISocialLogin {
  className?: string;
}

const socialLoginList: { name: string; icon: string }[] = [
  {
    name: '카카오',
    icon: '/assets/icons/kakao.svg',
  },
  {
    name: '구글',
    icon: '/assets/icons/google.svg',
  },
  {
    name: '페이스북',
    icon: '/assets/icons/facebook.svg',
  },
];

export default function SocialLogin({ className }: ISocialLogin) {
  return (
    <section className={classNames('', className)}>
      <ul className="flex w-full flex-col gap-10px">
        {socialLoginList.map((socialLogin) => (
          <li key={socialLogin.name}>
            <CustomButton color="white" className="relative">
              <Image
                src={socialLogin.icon}
                alt={`${socialLogin.name} 로그인 아이콘`}
                width={24}
                height={24}
                className="absolute left-[14px]"
              />
              {socialLogin.name} 계정으로 로그인
            </CustomButton>
          </li>
        ))}
      </ul>
      <div className="mt-1 flex items-center justify-center">
        <Link href="/login">
          <TextButton size="12px" color="gray-300">
            이메일로 로그인
          </TextButton>
        </Link>
        <span className="text-gray-300">|</span>
        <Link href="/signup">
          <TextButton size="12px" color="gray-300">
            회원가입
          </TextButton>
        </Link>
      </div>
    </section>
  );
}
