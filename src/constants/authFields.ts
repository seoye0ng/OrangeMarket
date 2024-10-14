export interface IFields {
  [key: string]: {
    label: string;
    placeholder: string;
  };
}

export const SIGN_UP_FIELDS: IFields = {
  email: {
    label: '이메일',
    placeholder: '이메일을 설정해주세요.',
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호를 설정해주세요.',
  },
};

export const PROFILE_FIELDS: IFields = {
  username: {
    label: '사용자 이름',
    placeholder: '2~10자 이내여야 합니다.',
  },
  accountname: {
    label: '계정 ID',
    placeholder: '영문, 숫자, 특수문자(.), (_)만 사용 가능합니다..',
  },
  intro: {
    label: '소개',
    placeholder: '자신과 판매할 상품에 대해 소개해 주세요!.',
  },
};

export const LOGIN_FIELDS: IFields = {
  email: {
    label: '이메일',
    placeholder: '이메일을 입력하세요.',
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
  },
};
