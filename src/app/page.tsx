import { postList } from '@/__mock__/postList';
import PostItem from '@/components/common/post-item/PostItem';

export default function Home() {
  return (
    <main className="mt-5 px-4">
      {postList.post.map(({ author, ...post }) => (
        <PostItem key={post.id} author={author} post={post} />
      ))}
    </main>
  );
}
