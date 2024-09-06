/** @type {import('postcss-load-config').Config */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // 크로스 브라우저 호환성 추가
  },
};

export default config;
