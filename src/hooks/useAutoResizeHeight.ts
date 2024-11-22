import { throttle } from 'lodash';
import { useRef, useCallback, useMemo, useEffect } from 'react';

export function useAutoResizeHeight<T extends HTMLElement>(throttleTime = 100) {
  const elementRef = useRef<T | null>(null);

  const resizeToFitContent = useCallback(() => {
    const element = elementRef.current;
    if (element) {
      element.style.height = 'auto'; // 높이 초기화
      element.style.height = `${element.scrollHeight}px`; // 콘텐츠에  조정
    }
  }, []);

  // Throttled function 생성
  const throttledResize = useMemo(
    () => throttle(resizeToFitContent, throttleTime),
    [resizeToFitContent, throttleTime],
  );

  // Cleanup: Throttle 함수 정리
  useEffect(() => {
    return () => {
      console.log('cl');
      throttledResize.cancel(); // 메모리 누수 방지
    };
  }, [throttledResize]);

  return { elementRef, throttledResize };
}
