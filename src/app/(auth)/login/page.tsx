'use client';

import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import { ILoginRequest } from '@/api/types/auth';
import CustomButton from '@/components/common/button/Button';
import FormTemplate from '@/components/common/form/auth-form/FormTemplate';
import Title from '@/components/common/title/Title';
import { loginFields } from '@/config/authFieldConfig';
import { TITLE_TEXT } from '@/constants/titleText';
import useLogin from '@/hooks/queries/auth/useLogin';

export default function Login() {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });
  const { mutate } = useLogin();

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: ILoginRequest) => {
    console.log('성공');
    mutate(data);
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
        <button
          type="button"
          className="mx-auto mt-4 block p-1 text-12px font-normal text-gray-300"
        >
          이메일로 회원가입
        </button>
      </Link>
    </>
  );
}
