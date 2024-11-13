import PostFeedPage from '@/components/pages/PostFeedPage';

export default function Home() {
  // 로그인x 시에는 splash 이미지
  // 로그인을 했을 때는 PostFeedPage를 렌더링
  return <PostFeedPage />;
}
