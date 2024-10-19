const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Next.js 앱의 루트 디렉토리
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transform: {
    // Jest가 테스트 파일을 어떻게 변환할지를 정의하는 설정. TypeScript, JSX, 또는 다른 언어로 작성된 파일을 JavaScript로 변환하는 데 사용 - TypeScript 파일을 변환할 때 ts-jest를 사용
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    // 절대 경로 사용시
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
