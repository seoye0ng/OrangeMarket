export interface IUser {
  _id: string;
  username: string;
  email: string;
  accountname: string;
  image: string;
}

/* -- 공통 응답 구조 인터페이스 -- */
export interface IBaseResponse<T> {
  message: string;
  user: IUser & T;
}

/* -- 회원가입 요청, 응답 -- */
export interface ISignUpRequest {
  username: string;
  email: string;
  password: string;
  accountname: string;
  intro: string;
  image: string;
}

export type ISignupResponse = IBaseResponse<{ intro: string }>;

/* -- 로그인 요청, 응답 -- */
export interface ILoginRequest {
  email: string;
  password: string;
}

export type ILoginResponse = IBaseResponse<{ token: string }>;
