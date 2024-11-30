import FollowListPage from '@/components/pages/FollowListPage';

export default function Follower({
  params: { accountname },
}: {
  params: { accountname: string };
}) {
  return <FollowListPage accountName={accountname} />;
}
