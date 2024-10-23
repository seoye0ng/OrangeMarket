import PostItem from '@/components/common/post-item/PostItem';
import { postList } from '@/mocks/postList';

export default function Home() {
  return (
    <main className="mt-5 px-4">
      {postList.post.map(({ author, ...post }) => (
        <PostItem author={author} post={post} />
      ))}
    </main>
  );
}
