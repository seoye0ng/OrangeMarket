import { IPostList } from '@/api/types/post';
import { PostContent } from '@/components/common/post-item/post-card';
import PostItem from '@/components/common/post-item/PostItem';

interface PostListViewProps {
  postList: IPostList;
}

interface PostAlbumViewProps {
  postList: IPostList;
}

function PostListView({ postList }: PostListViewProps) {
  if (postList.post.length === 0) {
    return <div className="pb-20px px-4 text-center">포스트가 없습니다.</div>;
  }

  return (
    <div className="px-4 pb-20 pt-4">
      {postList.post.map((post) => (
        <PostItem key={post.id} author={post.author} post={post} />
      ))}
    </div>
  );
}

function PostAlbumView({ postList }: PostAlbumViewProps) {
  const filteredImagePosts = postList.post.filter((post) => post.image);

  if (filteredImagePosts.length === 0) {
    return (
      <div className="pb-20 pt-4 text-center">
        이미지가 있는 포스트가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 px-4 pb-20 pt-4">
      {filteredImagePosts.map((post) => (
        <PostContent key={post.id} image={post.image} />
      ))}
    </div>
  );
}

export { PostListView, PostAlbumView };
