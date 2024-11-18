'use client';

import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import { ILoginRequest } from '@/api/types/auth';
import CustomButton from '@/components/common/button/Button';
import FormTemplate from '@/components/common/form/auth-form/FormTemplate';
import Text from '@/components/common/text/Text';
import Title from '@/components/common/title/Title';
import { loginFields } from '@/config/authFieldConfig';
import { TITLE_TEXT } from '@/constants/titleText';
import useLogin from '@/hooks/queries/auth/useLogin';
import useNavigate from '@/hooks/useNavigate';
import AuthService from '@/services/AuthService';

export default function LoginPage() {
  const { goTo } = useNavigate();
  const { mutateAsync: login } = useLogin();

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: { user: { email: '', password: '' } },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data: ILoginRequest) => {
    try {
      const response = await login(data);
      const { token, accountname } = response.user;
      if (token && accountname) {
        AuthService.login(accountname, token);
        goTo('/feed');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <>
      <Title
        padding="pt-30px pb-10"
        title={TITLE_TEXT.login.title}
        description={TITLE_TEXT.login.description}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTemplate fields={loginFields} />
          <CustomButton
            type="submit"
            color="primary"
            size="l"
            radius="full"
            className="mt-30px"
            isDisabled={!isValid}
          >
            로그인
          </CustomButton>
        </form>
      </FormProvider>
      <Link href="/signup">
        <button type="button" className="mx-auto mt-4 block p-1">
          <Text size="12px" color="gray-300">
            이메일로 회원가입
          </Text>
        </button>
      </Link>
    </>
  );
}
