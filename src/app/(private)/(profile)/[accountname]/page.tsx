import ProfilePage from '@/components/pages/ProfilePage';

export default function Profile({
  params: { accountname },
}: {
  params: { accountname: string };
}) {
  return <ProfilePage accountName={accountname} />;
}
