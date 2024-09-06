/** @type {import('postcss-load-config').Config */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // 크로스 브라우저 호환성 추가
    'postcss-import': {}, // CSS 파일 간 import 기능 지원
    '@nextui-org/postcss': {}, // Next UI 스타일 플러그인 추가
  },
};

export default config;
