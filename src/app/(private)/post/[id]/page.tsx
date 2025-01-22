import PostDetailsPage from '@/components/pages/PostDetailsPage';

export default function PostDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return <PostDetailsPage postId={id} />;
}
