'use client';

import PostDetailsPage from '@/components/pages/PostDetailsPage';
import { useParams } from 'next/navigation';

export default function PostDetails() {
  const params = useParams();
  const id = params.id as string;

  return <PostDetailsPage postId={id} />;
}
