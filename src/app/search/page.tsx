/* eslint-disable no-underscore-dangle */

import { userList } from '@/__mock__/userList';
import { IUserProfileBase } from '@/api/types/user';
import UserCard from '@/components/common/post-item/user-card/UserCard';

export default function Search() {
  return (
    <main className="mt-5 px-4">
      {userList.map((user: IUserProfileBase) => (
        <UserCard
          key={user._id}
          className="mb-5"
          imageSize="42px"
          userProfile={user}
        />
      ))}
    </main>
  );
}
