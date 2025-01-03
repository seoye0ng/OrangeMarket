export interface IUserBase {
  username: string;
  accountname: string;
  intro: string;
  image: string;
}

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

/* -- account edit 요청 -- */
export interface IEditAccountRequest {
  user: IUserBase;
}

export interface IUserProfile extends IUserProfileBase {
  intro: string;
  isfollow: boolean;
}

export type ISearchUser = IUserProfile[];

export interface IProfileResponse {
  profile: IUserProfile;
}
