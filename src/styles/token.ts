export const tokens = {
  colors: {
    'primary-50': '#FFC7A7',
    'primary-100': '#F26E22',
    'gray-50': '#F2F2F2',
    'gray-100': '#DBDBDB',
    'gray-200': '#C4C4C4',
    'gray-300': '#767676',
    black: '#121212',
    white: '#FFFFFF',
    success: '#17c964',
    warning: '#EB5757',
    like: '#FFA9AB',
  },
  fontSize: {
    '10px': '0.625rem',
    '12px': '0.75rem',
    '14px': '0.875rem',
    '16px': '1rem',
    '17px': '1.0625rem',
    '18px': '1.125rem',
    '20px': '1.25rem',
    '22px': '1.375rem',
    '24px': '1.5rem',
  },
  spacing: {
    '2px': '0.125rem',
    '6px': '0.375rem',
    '10px': '0.625rem',
    '13px': '0.8125rem',
    '15px': '0.9375rem',
    '16px': '1rem',
    '25px': '1.5625rem',
    '26px': '1.625rem',
    '30px': '1.875rem',
    '34px': '2.125rem',
  },
  zIndex: {
    '-1': '-1',
    '100': '100',
  },
  radius: {
    '8px': '0.5rem',
    '10px': '0.625rem',
  },
};

export type IconColor = keyof typeof tokens.colors;
