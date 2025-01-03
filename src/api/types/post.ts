import { IUserProfile } from './user';

export interface IPost {
  id: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  hearted: boolean;
  heartCount: number;
  commentCount: number;
  author: IUserProfile;
}
export interface IPostDetail {
  post: IPost;
}
// author 필드를 제외한 타입 정의
export type IPostWithoutAuthor = Omit<IPost, 'author'>;

export interface IPostList {
  posts: IPost[];
}

export interface IUploadPostRequest {
  post: Pick<IPost, 'image' | 'content'>;
}
