export interface IUserProfileBase {
  _id: string;
  username: string;
  accountname: string;
  image: string;
  following: string[];
  follower: string[];
  followerCount: number;
  followingCount: number;
}

export interface IUserProfile extends IUserProfileBase {
  intro: string;
  isfollow: boolean;
}

export type ISearchUser = IUserProfile[];

export interface IProfileResponse {
  profile: IUserProfile;
}
