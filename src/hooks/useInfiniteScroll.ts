import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface IUseInfiniteScrollParams {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetching?: boolean;
}

export default function useInfiniteScroll({
  fetchNextPage,
  hasNextPage,
  isFetching,
}: IUseInfiniteScrollParams) {
  const { ref, inView } = useInView();

  // 요소가 뷰에 들어오면 다음 페이지 데이터 가져오기
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  return { ref };
}
