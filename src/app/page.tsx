'use client';

import '@/__mock__';
import PostItem from '@/components/common/post-item/PostItem';
import usePostList from '@/hooks/queries/post/usePostList';

export default function Home() {
  const { data: postList, error, isLoading } = usePostList(10, 0);

  // TODO: 로딩 시 처리
  if (isLoading) return <div>Loading...</div>;

  // TODO: 에러 시 처리
  if (error) return <div>{error.message}</div>;

  return (
    <main className="mt-5 px-4">
      {postList?.post.map(({ author, ...post }) => (
        <PostItem key={post.id} author={author} post={post} />
      ))}
    </main>
  );
}
