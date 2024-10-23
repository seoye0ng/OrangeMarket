import { IPost } from '@/api/types/post';
import Comment from '@/components/icons/Comment';
import Heart from '@/components/icons/Heart';

interface IPostReactionProps {
  hearted: IPost['hearted'];
  heartCount: IPost['heartCount'];
  commentCount: IPost['commentCount'];
}

export default function PostReaction({
  hearted,
  heartCount,
  commentCount,
}: IPostReactionProps) {
  return (
    <ul className="mb-4 mt-3 flex items-center gap-4 text-12px font-normal text-gray-300">
      <li className="flex items-center">
        <button type="button" aria-label="하트 버튼">
          <Heart color={hearted ? 'like' : 'gray-300'} isActive={hearted} />
        </button>
        <span>{heartCount}</span>
      </li>
      <li className="flex items-center">
        <button type="button" aria-label="댓글 버튼">
          <Comment />
        </button>
        <span>{commentCount}</span>
      </li>
    </ul>
  );
}
