import { IUserBase } from './user';

/* -- 공통 응답 구조 인터페이스 -- */
export interface IBaseResponse<T> {
  message: string;
  user: IUserBase & { _id: string } & T;
}

/* -- 회원가입 요청, 응답 -- */
export interface ISignUpRequest {
  user: IUserBase & {
    email: string;
    password: string;
  };
}

export type ISignupResponse = IBaseResponse<{ intro: string }>;

/* -- 로그인 요청, 응답 -- */
export interface ILoginRequest {
  user: {
    email: string;
    password: string;
  };
}

export type ILoginResponse = IBaseResponse<{ token: string }>;
