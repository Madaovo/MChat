declare interface IUser {
  nickname: string;
  avatarUrl: string;
  friends: Array<IUser>;
  authority: number;
  friends_length: number;
  _id: string;
  username: number;
  [key: string]: any;
}
