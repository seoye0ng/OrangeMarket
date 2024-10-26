'use client';

import { Input } from '@nextui-org/react';
import classNames from 'classnames';
import { useRef, FormEvent } from 'react';

import UserImage from '@/components/common/post-item/user-card/UserImage';

export interface ICommentFormProps {
  className?: string;
  onComment: (commentTerm: string) => void;
}

export default function CommentForm({
  onComment,
  className,
}: ICommentFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commentTerm = inputRef.current?.value || '';
    /* TODO: 댓글을 입력하지 않을 때 */
    // 댓글을 입력해주세요.
    onComment(commentTerm);
  };

  return (
    <article
      className={classNames(
        'flex items-center gap-2 border-t-1 border-gray-100 bg-white',
        className,
      )}
    >
      <UserImage size="36px" />
      <form onSubmit={handleCommentSubmit} className="flex w-full gap-2">
        <Input
          type="text"
          ref={inputRef}
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
