import PostDetailsPage from '@/components/pages/PostDetailsPage';

export default function PostDetails({
  param: { id },
}: {
  param: { id: string };
}) {
  return <PostDetailsPage postId={id} />;
}
