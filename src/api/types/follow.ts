import { IUserProfile } from './user';

export type IFollowList = IUserProfile[];

export interface IFollowResponse {
  profile: IUserProfile;
}
