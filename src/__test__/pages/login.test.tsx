import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Login from '@/app/(auth)/login/page';

// useRouter를 모킹하여 테스트 환경에서 라우팅을 처리하지 않음
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Login', () => {
  it('로그인 헤더 타이틀 렌더링', () => {
    // QueryClient 생성
    const queryClient = new QueryClient();

    // QueryClientProvider로 감싸서 QueryClient 제공
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>,
    );
    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('로그인');
  });
});
