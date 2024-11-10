import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner color="primary" size="lg" />
    </div>
  );
}
