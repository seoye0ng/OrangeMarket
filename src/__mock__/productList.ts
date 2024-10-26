import { IProductList } from '@/api/types/product';

export const productList: IProductList = {
  data: 3,
  product: [
    {
      id: '1',
      itemName: '아에이오우 선글라스 블랙',
      price: 20000990,
      link: '#',
      itemImage: '/assets/video.png',
      author: {
        _id: '알파카',
        username: '알파카',
        accountname: '알파카2',
        intro: '2',
        image: '알파카',
        isfollow: false,
        following: [],
        follower: ['팔로워 한 사용자의 id'],
        followerCount: 1,
        followingCount: 0,
      },
    },
    {
      id: '2',
      itemName: '아에이오우 선글라스',
      price: 200000,
      link: '#',
      itemImage: '/assets/video.png',
      author: {
        _id: '알파카',
        username: '알파카',
        accountname: '알파카2',
        intro: '2',
        image: '알파카',
        isfollow: false,
        following: [],
        follower: ['팔로워 한 사용자의 id'],
        followerCount: 1,
        followingCount: 0,
      },
    },
    {
      id: '3',
      itemName: '아에이오우 선글라스',
      price: 200000,
      link: '#',
      itemImage: '/assets/video.png',
      author: {
        _id: '알파카',
        username: '알파카',
        accountname: '알파카2',
        intro: '2',
        image: '알파카',
        isfollow: false,
        following: [],
        follower: ['팔로워 한 사용자의 id'],
        followerCount: 1,
        followingCount: 0,
      },
    },
  ],
};