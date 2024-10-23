import IconButton from '@/components/common/button/IconButton';
import PostCard from '@/components/common/post-item/post-card/PostCard';
import UserCard from '@/components/common/post-item/user-card/UserCard';
import SMore from '@/components/icons/SMore';
import { postList } from '@/mocks/postList';

export default function Home() {
  return (
    <main className="mt-5 px-4">
      {postList.post.map(({ author, ...post }) => (
        <section key={post.id} className="mb-5">
          <UserCard imageSize="42px" userProfile={author}>
            <IconButton
              icon={SMore}
              className="self-start"
              label="더보기 버튼"
            />
          </UserCard>
          <PostCard post={post} postCardClassName="ml-[54px]" />
        </section>
      ))}
    </main>
  );
}
