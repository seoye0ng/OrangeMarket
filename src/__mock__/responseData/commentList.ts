import { ICommentList } from '@/api/types/comment';

export const commentList: ICommentList = {
  comments: [
    {
      id: '1',
      content: '한 나의 고독은 둘은 그리도 잊지 차츰 시각에 그 눈물 가실 내 경',
      createdAt: '2021-12-20T06:10:26.803Z',
      author: {
        _id: '1',
        username: '초록초록 알파카',
        accountname: '@al__1',
        intro: '안녕 난 알파카',
        image: '',
        isfollow: true,
        following: [],
        follower: [],
        followerCount: 10,
        followingCount: 10,
      },
    },
    {
      id: '2',
      content:
        '이런 자랑처럼 위에 유유히 책상을 까닭입니다. 것을 그리고 밤이 오는 모습 지나고 할 헤는 하나둘 청명한 알리라,',
      createdAt: '2023-06-01',
      author: {
        _id: '2초록색 알파카',
        username: '초록초록 알파카2',
        accountname: 'al__12',
        intro: '안녕 난 알파카2',
        image: '',
        isfollow: true,
        following: [],
        follower: [],
        followerCount: 10,
        followingCount: 10,
      },
    },
    {
      id: '3',
      content:
        '이런 자랑처럼 위에 유유히 책상을 까닭입니다. 것을 그리고 밤이 오는 모습 지나고 할 헤는 하나둘 청명한 알리라,',
      createdAt: '2023-06-01',
      author: {
        _id: '3초록색 알파카',
        username: '3초록초록 알파카2',
        accountname: 'al__12',
        intro: '안녕 난 알파카2',
        image: '',
        isfollow: true,
        following: [],
        follower: [],
        followerCount: 10,
        followingCount: 10,
      },
    },
  ],
};
