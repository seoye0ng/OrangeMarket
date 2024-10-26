import { IUserProfileBase } from '@/api/types/user';

export const userList: IUserProfileBase[] = [
  {
    _id: '1',
    username: '초록초록 알파카',
    accountname: '@al__1',
    image: '/assets/video.png',
    following: [],
    follower: [],
    followerCount: 10,
    followingCount: 10,
  },
  {
    _id: '2',
    username: '버건디 알파카',
    accountname: '@al__12',
    image: '',
    following: [],
    follower: [],
    followerCount: 20,
    followingCount: 30,
  },
  {
    _id: '3',
    username: '코발트블루 알파카',
    accountname: '@al__123',
    image: '/assets/video.png',
    following: [],
    follower: [],
    followerCount: 1000,
    followingCount: 100,
  },
];
