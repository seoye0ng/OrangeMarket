import MockAdapter from 'axios-mock-adapter';

import instance from '@/api/index'; // axios 인스턴스 가져오기

import { commentList } from './responseData/commentList';
import { followList } from './responseData/followList';
import { postListData } from './responseData/postList';

// Mock Adapter 인스턴스 생성
const mock = new MockAdapter(instance);

/* --- '/post/feed'로 시작하는 모든 GET 요청을 모킹 --- */
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

/* --- 게시물 상세 GET 요청 모킹 --- */
mock.onGet(/\/post\/\d+$/).reply((config) => {
  const { url } = config;

  // url이 없을 경우 에러 처리
  if (!url) {
    return [400, { message: '잘못된 요청입니다.' }];
  }

  const urlParts = url.split('/');
  const postId = urlParts[urlParts.length - 1];

  // mock 데이터에서 postId에 해당하는 포스트 찾기
  const post = postListData.posts.find((p) => p.id === postId);

  if (post) {
    return [200, { post }]; // 포스트가 있는 경우
  }
  return [404, { message: '존재하지 않는 게시글입니다.' }]; // 포스트가 없는 경우
});

/* --- 댓글 GET 요청 모킹 --- */
mock.onGet(/\/post\/\d+\/comments/).reply((config) => {
  const { url } = config;

  if (!url) {
    return [400, { message: '잘못된 요청입니다.' }];
  }

  const urlParts = url.split('/');
  const postId = urlParts[urlParts.length - 2]; // 'comments'의 이전 부분

  // 모의 데이터에서 postId에 해당하는 댓글 찾기
  const comments = commentList.comments.filter((c) => c.id === postId);

  return [200, { comments }];
});

/* --- 댓글 POST 요청 모킹 --- */
mock.onPost(/\/post\/\d+\/comments/).reply(() => {
  const comments = commentList.comments[commentList.comments.length - 1];

  return [200, { comments }];
});

/* --- 팔로워/팔로잉 목록 GET 요청 모킹 --- */
mock
  .onGet(/\/profile\/[^/]+\/(following|follower)\?limit=\d+&skip=\d+/)
  .reply((config) => {
    // URL에서 쿼리 파라미터 추출
    const urlParams = new URLSearchParams(config.url?.split('?')[1]);
    const limit = parseInt(urlParams.get('limit') || '10', 10);
    const skip = parseInt(urlParams.get('skip') || '0', 10);

    // 해당 타입의 목록에서 원하는 부분만 슬라이스
    const users = followList.slice(skip, skip + limit) || [];

    // 응답 반환
    return [200, users];
  });
