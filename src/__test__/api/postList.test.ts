import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { postListData } from '@/__mock__/postList';
import { postList } from '@/api/apiRequests/post';
import instance from '@/api/index';

describe('postList API Test', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(instance);
  });

  afterEach(() => {
    mock.reset();
  });

  /* -- 요청 성공 테스트 -- */
  it('회원가입 성공', async () => {
    mock.onGet(/\/post\/feed.*/).reply(200, postListData);

    const response = await postList(10, 0);

    expect(response).toEqual(postListData);
  });

  /* -- 요청 실패 테스트 -- */
  it('에러발생!', async () => {
    mock.onGet(/\/post\/feed.*/).reply(500);

    try {
      await postList(10, 0);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        expect(error.response?.status).toBe(500);
      } else {
        throw new Error('에러 발생!');
      }
    }
  });
});
