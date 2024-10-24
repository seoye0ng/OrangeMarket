/* eslint-disable no-underscore-dangle */

import { IUserProfileBase } from '@/api/types/user';
import UserCard from '@/components/common/post-item/user-card/UserCard';
import { userList } from '@/mocks/userList';

export default function Search() {
  return (
    <main className="mt-5 px-4">
      {userList.map((user: IUserProfileBase) => (
        <section key={user._id} className="mb-5">
          <UserCard imageSize="42px" userProfile={user} />
        </section>
      ))}
    </main>
  );
}
