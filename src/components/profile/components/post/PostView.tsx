import { IPostList } from '@/api/types/post';
import { PostContent } from '@/components/common/post-item/post-card';
import PostItem from '@/components/common/post-item/PostItem';

interface PostViewProps {
  postList: IPostList;
  postView: 'list' | 'album';
}

function PostView({ postList, postView }: PostViewProps) {
  const isListView = postView === 'list';
  const posts = postList.posts ?? [];

  return isListView ? (
    posts.map((post) => <PostItem key={post.id} post={post} />)
  ) : (
    <div className="grid grid-cols-3 gap-2 pb-2">
      {posts.map((post) => (
        <PostContent key={post.id} image={post.image} isListType={isListView} />
      ))}
    </div>
  );
}

export default PostView;
