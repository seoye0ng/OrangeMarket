import classNames from 'classnames';

import { IUserProfile, IUserProfileBase } from '@/api/types/user';
import IconButton from '@/components/common/button/IconButton';
import SMore from '@/components/icons/SMore';

import UserImage from '../user-card/UserImage';
import { ICommentWithoutAuthor } from '@/api/types/comment';

interface ICommentProps {
  user: IUserProfile;
  comment: ICommentWithoutAuthor;
  className?: string;
}

export default function Comment({ user, comment, className }: ICommentProps) {
  return (
    <article className={classNames('flex gap-3', className)}>
      <UserImage user={user} size="36px" />
      <div className="mt-[5px] flex w-full flex-col gap-4">
        <div className="flex gap-6px">
          <p className="text-14px font-medium leading-17px">{user.username}</p>
          <span className="font-nomal text-10px leading-17px text-gray-300">
            {/* TODO: 24시간 이후부터는 날짜 렌더/ 1시간 이상부터는 분 단위 제거 */}
            {`· ${comment.createdAt}`}
          </span>
          <IconButton icon={SMore} className="ml-auto" label="더보기 버튼" />
        </div>
        <p className="text-12px font-normal leading-17px text-gray-400">
          {comment.content}
        </p>
      </div>
    </article>
  );
}
