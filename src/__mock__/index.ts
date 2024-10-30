/* eslint-disable @typescript-eslint/no-explicit-any */
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

mock.onGet(/\/post\/:\d+/).reply((config) => {
  const { url } = config;

  // url이 없을 경우 에러 처리
  if (!url) {
    return [400, { message: '잘못된 요청입니다.' }];
  }

  const urlParts = url.split('/');

  // 마지막 부분에서 ':'가 포함된 숫자 가져오기
  const lastPart = urlParts[urlParts.length - 1]; // ':1'과 같은 형식
  const postId = lastPart.substring(1); // ':'를 제거하고 숫자만 가져옴

  // mock 데이터에서 postId에 해당하는 포스트 찾기
  const post = postListData.posts.find((p) => p.id === postId);

  if (post) {
    return [200, { post }]; // 포스트가 있는 경우
  }
  return [404, { message: '존재하지 않는 게시글입니다.' }]; // 포스트가 없는 경우
});
