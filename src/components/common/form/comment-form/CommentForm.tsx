'use client';

import { Input } from '@nextui-org/react';
import classNames from 'classnames';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import UserImage from '@/components/common/post-item/user-card/UserImage';

export interface ICommentFormProps {
  className?: string;
  onSubmit: (commentTerm: string) => void;
}

export default function CommentForm({
  onSubmit,
  className,
}: ICommentFormProps) {
  const [commentTerm, setCommentTerm] = useState('');

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* 댓글을 입력하지 않을 때 */
    if (!commentTerm) {
      toast.error('댓글을 입력해주세요.');
      return;
    }

    onSubmit(commentTerm);
    setCommentTerm('');
  };

  return (
    <article
      className={classNames(
        'border-t-gray flex items-center gap-2 bg-white',
        className,
      )}
    >
      <UserImage size="36px" />
      <form onSubmit={handleCommentSubmit} className="flex w-full gap-2">
        <Input
          type="text"
          value={commentTerm}
          onChange={(e) => setCommentTerm(e.target.value)}
          placeholder="댓글 입력하기..."
          isClearable
        />
        <button
          type="submit"
          className="shrink-0 px-1 text-14px font-medium text-primary"
        >
          게시
        </button>
      </form>
    </article>
  );
}
