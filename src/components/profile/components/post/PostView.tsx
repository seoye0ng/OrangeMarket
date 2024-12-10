import { IPostList } from '@/api/types/post';
import { PostContent } from '@/components/common/post-item/post-card';
import PostItem from '@/components/common/post-item/PostItem';

import EmptyState from '../empty-state/EmptyState';

interface PostViewProps {
  postList: IPostList;
  postView: 'list' | 'album';
}

function PostView({ postList, postView }: PostViewProps) {
  const isListView = postView === 'list';

  if (postList.posts.length === 0) {
    const message = isListView
      ? '포스트가 없습니다.'
      : '이미지가 있는 포스트가 없습니다.';

    return (
      <EmptyState className="pb-20px px-4 text-center" message={message} />
    );
  }

  return isListView ? (
    postList.posts.map((post) => <PostItem key={post.id} post={post} />)
  ) : (
    <div className="grid grid-cols-3 gap-2 pb-2">
      {postList.posts.map((post) => (
        <PostContent key={post.id} image={post.image} isListType={isListView} />
      ))}
    </div>
  );
}

export default PostView;
