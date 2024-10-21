import {
  accountNameValidation,
  emailValidation,
  passwordValidation,
  userNameValidation,
  IValidation,
} from '@/validation/formValidations';

export interface IFields {
  [key: string]: {
    label: string;
    placeholder: string;
    validation?: IValidation;
  };
}

export const signupFields: IFields = {
  email: {
    label: '이메일',
    placeholder: '이메일을 설정해주세요.',
    validation: emailValidation,
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호를 설정해주세요.',
    validation: passwordValidation,
  },
};

export const profileFields: IFields = {
  username: {
    label: '사용자 이름',
    placeholder: '2~10자 이내여야 합니다.',
    validation: userNameValidation,
  },
  accountname: {
    label: '계정 ID',
    placeholder: '영문, 숫자, 특수문자(.), (_)만 사용 가능합니다..',
    validation: accountNameValidation,
  },
  intro: {
    label: '소개',
    placeholder: '자신과 판매할 상품에 대해 소개해 주세요!.',
  },
};

export const loginFields: IFields = {
  email: {
    label: '이메일',
    placeholder: '이메일을 입력하세요.',
    validation: emailValidation,
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
    validation: passwordValidation,
  },
};
