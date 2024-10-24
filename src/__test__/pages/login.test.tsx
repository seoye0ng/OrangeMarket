import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, fireEvent } from '@testing-library/react';

import Login from '@/app/(auth)/login/page';

// useRouter를 모킹하여 테스트 환경에서 라우팅을 처리하지 않음
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Login', () => {
  it('로그인 페이지 요소 렌더링', () => {
    // QueryClient 생성
    const queryClient = new QueryClient();

    // QueryClientProvider로 감싸서 QueryClient 제공
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    const emailInput = screen.getByLabelText('이메일');
    const passwordInput = screen.getByLabelText('비밀번호');
    const loginButton = screen.getByRole('button', { name: '로그인' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('로그인');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('로그인 폼 인풋 필드 값 입력', () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>,
    );

    const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.');
    const passwordInput = screen.getByPlaceholderText('비밀번호를 입력하세요.');

    // 인풋 필드에 값 입력
    fireEvent.change(emailInput, { target: { value: 'test123@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123!' } });

    // 입력 필드의 값이 변경되었는지 확인
    expect(emailInput).toHaveValue('test123@example.com');
    expect(passwordInput).toHaveValue('password123!');
  });
});
