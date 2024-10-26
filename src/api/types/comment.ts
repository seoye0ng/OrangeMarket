import { IUserProfile } from './user';

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  author: IUserProfile;
}

export type ICommentWithoutAuthor = Omit<IComment, 'author'>;

export interface ICommentList {
  comments: IComment[];
}
