/* eslint-disable no-useless-escape */

export interface IValidation {
  required: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}

export const emailValidation = {
  required: '이메일은 필수 입력 사항입니다.',
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: '유효한 이메일 주소를 입력하세요',
  },
};

export const passwordValidation = {
  required: '비밀번호는 필수 입력 사항입니다.',
  minLength: {
    value: 6,
    message: '비밀번호는 최소 6자 이상이어야 합니다.',
  },
  maxLength: {
    value: 20,
    message: '비밀번호는 최대 20자 이하로 입력하세요.',
  },
  pattern: {
    value: /^(?=.*[!@#$%^&*])/,
    message: '비밀번호에는 최소 하나의 특수 문자가 포함되어야 합니다.',
  },
};

export const accountNameValidation = {
  required: '계정 ID는 필수 입력 사항입니다.',
  pattern: {
    value: /^[a-zA-Z0-9._]+$/,
    message: '영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
  },
};

export const userNameValidation = {
  required: '사용자 이름은 필수 입력 사항입니다.',
};

export const uploadValidation = {
  required: '게시글 입력은 필수 입력 사항입니다.',
};
