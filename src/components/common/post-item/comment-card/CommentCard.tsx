import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { ICommentWithoutAuthor } from '@/api/types/comment';
import { IUserProfile } from '@/api/types/user';
import IconButton from '@/components/common/button/IconButton';
import SMore from '@/components/icons/SMore';

import 'dayjs/locale/ko';
import UserImage from '../user-card/UserImage';

dayjs.extend(relativeTime);
dayjs.locale('ko');

interface ICommentCardProps {
  user: IUserProfile;
  comment: ICommentWithoutAuthor;
  className?: string;
}

const getTimeAgo = (createdAt: string) => {
  return dayjs(createdAt).fromNow();
};

export default function CommentCard({
  user,
  comment,
  className,
}: ICommentCardProps) {
  return (
    <article className={classNames('flex gap-3', className)}>
      <UserImage user={user} size="36px" />
      <div className="mt-[5px] flex w-full flex-col gap-4">
        <div className="flex gap-6px">
          <p className="text-14px font-medium leading-17px">{user.username}</p>
          <span className="font-nomal text-10px leading-17px text-gray-300">
            {`· ${getTimeAgo(comment.createdAt)}`}
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
