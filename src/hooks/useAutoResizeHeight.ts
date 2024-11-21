import { useRef, useCallback } from 'react';

export function useAutoResizeHeight<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  const resizeToFitContent = useCallback(() => {
    const element = elementRef.current;
    if (element) {
      element.style.height = 'auto'; // 높이 초기화
      element.style.height = `${element.scrollHeight}px`; // 콘텐츠에 따라 높이 조정
    }
  }, []);

  return { elementRef, resizeToFitContent };
}
