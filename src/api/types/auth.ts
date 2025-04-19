import { IUserBase } from './user';

/* -- 공통 응답 구조 인터페이스 -- */
export interface IBaseResponse<T> {
  message: string;
  user: IUserBase & { _id: string } & T;
}

/* -- 유저 기본 정보 인터페이스 -- */
export interface IUserEmail {
  email: string;
}

export interface IUserAuth extends IUserEmail {
  password: string;
}

/* -- 회원가입 요청, 응답 -- */
export interface ISignUpRequest {
  user: IUserBase & IUserAuth;
}

export type ISignUpResponse = IBaseResponse<{ intro: string }>;

/* -- 이메일 유효성 검사 요청, 응답 -- */
export interface IEmailValidRequest {
  user: IUserEmail;
}

export type IEmailValidResponse = {
  message: string;
};

/* -- 로그인 요청, 응답 -- */
export interface ILoginRequest {
  user: IUserAuth;
}

export type ILoginResponse = IBaseResponse<{ token: string }>;
