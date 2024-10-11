import PostCard from '@/components/common/post-card/PostCard';
import UserCard from '@/components/common/user-card/UserCard';
import { postList } from '@/mocks/post/post';

export default function Home() {
  return (
    <main className="mt-5 px-4">
      {postList.map(({ author, ...post }) => (
        <section key={post.id} className="mb-5">
          <UserCard type="post" userProfile={author} />
          <PostCard post={post} postCardClassName="ml-[54px]" />
        </section>
      ))}
    </main>
  );
}
