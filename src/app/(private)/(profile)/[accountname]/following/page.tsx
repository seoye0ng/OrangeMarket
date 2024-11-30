import FollowListPage from '@/components/pages/FollowListPage';

export default function Following({
  params: { accountname },
}: {
  params: { accountname: string };
}) {
  return <FollowListPage accountName={accountname} />;
}
