import MockAdapter from 'axios-mock-adapter';
import { signup } from '@/api/apiRequests/auth';
import { ISignUpRequest, ISignupResponse } from '@/api/types/auth';
import instance from '@/api/index'; // axios 인스턴스 가져오기
import axios from 'axios';

describe('signup API Test', () => {
  let mock: MockAdapter;

  // 공통 회원가입 요청 데이터
  const requestData: ISignUpRequest = {
    username: '알파카',
    email: 'alpaca@naver.com',
    password: 'alpaca01!',
    accountname: 'alpaca_01',
    intro: '안녕 난 알파카!',
    image: '',
  };

  // 각 테스트 전에 Mock Adapter 설정
  beforeEach(() => {
    mock = new MockAdapter(instance); // axios 인스턴스 모킹
  });

  // 각 테스트 후 Mock Adapter 리셋
  afterEach(() => {
    mock.reset(); // 각 테스트가 끝날 때마다 모킹 초기화
  });

  /* -- 요청 성공 테스트 -- */
  it('회원가입 성공', async () => {
    const responseData: ISignupResponse = {
      message: '회원가입 성공!',
      user: {
        _id: '1',
        username: '알파카',
        email: 'alpaca@naver.com',
        accountname: 'alpaca_01',
        intro: '안녕 난 알파카!',
        image: '',
      },
    };

    // /user 경로에 대한 POST 요청 모킹, 200 응답과 함께 mock 데이터를 반환
    mock.onPost('/user').reply(200, responseData);

    // 실제 API 호출 함수 signup 실행
    const response = await signup(requestData);

    // 응답 데이터가 모킹한 데이터와 같은지 확인
    expect(response).toEqual(responseData);
  });

  /* -- 요청 실패 테스트 -- */
  it('에러발생!', async () => {
    // /user 경로에 대한 POST 요청 모킹, 500 에러 응답
    mock.onPost('/user').reply(500);

    // 에러 발생을 확인하는 try-catch 블록
    try {
      await signup(requestData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // 에러 상태 코드가 500인지 확인
        expect(error.response?.status).toBe(500);
      } else {
        // AxiosError가 아닐 경우 처리
        throw new Error('에러 발생!');
      }
    }
  });
});
