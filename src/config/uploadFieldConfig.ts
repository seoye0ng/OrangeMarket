import { uploadValidation } from '@/validation/formValidations';

import { IFields } from './authFieldConfig';

export const productFields: IFields = {
  itemName: {
    label: '상품명',
    placeholder: '2~15자 이내여야 합니다.',
    validation: uploadValidation,
  },
  price: {
    label: '가격',
    placeholder: '숫자만 입력 가능합니다.',
    validation: uploadValidation,
  },
  link: {
    label: '판매 링크',
    placeholder: 'URL을 입력해 주세요.',
    validation: uploadValidation,
  },
};
