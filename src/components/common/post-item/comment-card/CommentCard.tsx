import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';

import { ICommentWithoutAuthor } from '@/api/types/comment';
import { IUserProfile } from '@/api/types/user';
import IconButton from '@/components/common/button/IconButton';
import UserImage from '@/components/common/post-item/user-card/UserImage';
import Text from '@/components/common/text/Text';
import SMore from '@/components/icons/SMore';

import 'dayjs/locale/ko';

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

function CommentCard({ user, comment, className }: ICommentCardProps) {
  return (
    <article className={classNames('flex gap-3', className)}>
      <UserImage user={user} size="36px" />
      <div className="mt-[5px] flex w-full flex-col gap-4">
        <div className="flex items-center gap-6px">
          <Text size="14px" weight="medium">
            {user.username}
          </Text>
          <Text size="10px" color="gray-300">
            {`· ${getTimeAgo(comment.createdAt)}`}
          </Text>
          <IconButton icon={SMore} className="ml-auto" label="더보기 버튼" />
        </div>
        <Text size="12px" color="gray-400">
          {comment.content}
        </Text>
      </div>
    </article>
  );
}

export default React.memo(CommentCard);
