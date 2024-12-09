import { Spinner } from '@nextui-org/react';

export default function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner color="primary" size="lg" />
    </div>
  );
}
