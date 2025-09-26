import { postRequest } from '@/api/requests';
import {
  IAccountValidRequest,
  IAccountValidResponse,
  IEmailValidRequest,
  IEmailValidResponse,
  ILoginRequest,
  ILoginResponse,
  ISignUpRequest,
  ISignUpResponse,
} from '@/api/types/auth';

export const signup = async (data: ISignUpRequest) => {
  const response = await postRequest<ISignUpResponse, ISignUpRequest>(
    '/user',
    data,
    {
      useBFF: false,
    },
  );

  return response;
};

export const login = async (data: ILoginRequest) => {
  const response = await postRequest<ILoginResponse, ILoginRequest>(
    '/user/login',
    data,
  );

  return response;
};

export const emailValid = async (data: IEmailValidRequest) => {
  const response = await postRequest<IEmailValidResponse, IEmailValidRequest>(
    '/user/emailvalid',
    data,
    {
      useBFF: false,
    },
  );

  return response;
};

export const accountValid = async (data: IAccountValidRequest) => {
  const response = await postRequest<
    IAccountValidResponse,
    IAccountValidRequest
  >('/user/accountnamevalid', data, {
    useBFF: false,
  });

  return response;
};
