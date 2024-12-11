import { Spinner } from '@nextui-org/react';

interface InfiniteScrollLoaderProps {
  refCallback: (node: Element | null) => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

export default function InfiniteScrollLoader({
  refCallback,
  isFetchingNextPage,
  hasNextPage,
}: InfiniteScrollLoaderProps) {
  if (!hasNextPage) return null;

  return (
    <div ref={refCallback} className="pb-14">
      {isFetchingNextPage ? (
        <Spinner color="primary" size="lg" />
      ) : (
        '스크롤 내리기'
      )}
    </div>
  );
}
