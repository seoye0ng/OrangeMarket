import MockAdapter from 'axios-mock-adapter';

import instance from '@/api/index'; // axios 인스턴스 가져오기

import { postListData } from './postList'; // 모킹된 데이터

// Mock Adapter 인스턴스 생성
const mock = new MockAdapter(instance);

// '/post/feed'로 시작하는 모든 GET 요청을 모킹
mock.onGet(/\/post\/feed.*/).reply(200, postListData);
