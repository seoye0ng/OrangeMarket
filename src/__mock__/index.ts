import MockAdapter from 'axios-mock-adapter';

import instance from '@/api/index'; // axios 인스턴스 가져오기

import { postListData } from './postList'; // 모킹된 데이터

// Mock Adapter 인스턴스 생성
const mock = new MockAdapter(instance);

// '/post/feed'로 시작하는 모든 GET 요청을 모킹
mock.onGet(/\/post\/feed.*/).reply((config) => {
  // URL에서 쿼리 파라미터를 가져오기
  const urlParams = new URLSearchParams(config.url?.split('?')[1]);

  // 쿼리 파라미터에서 limit과 skip 값을 추출, 정수로 변환
  const limit = parseInt(urlParams.get('limit') || '10', 10);
  const skip = parseInt(urlParams.get('skip') || '0', 10);

  // 전체 데이터에서 원하는 부분만 슬라이스
  const posts = postListData.posts.slice(skip, skip + limit);

  return [200, { posts }];
});
