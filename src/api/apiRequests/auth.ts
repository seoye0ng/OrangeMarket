import { postRequest } from '@/api/requests';
import {
  ILoginRequest,
  ILoginResponse,
  ISignUpRequest,
  ISignupResponse,
} from '@/api/types/auth';

export const signup = async (data: ISignUpRequest) => {
  const response = await postRequest<ISignupResponse, ISignUpRequest>(
    '/user',
    data,
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
