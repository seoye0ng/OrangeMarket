import { postRequest } from '@/api/requests';
import { ISignUpRequest, ISignupResponse } from '@/api/types/auth';

export const signup = async (data: ISignUpRequest) => {
  const response = await postRequest<ISignupResponse, ISignUpRequest>(
    '/user',
    data,
  );

  return response;
};
