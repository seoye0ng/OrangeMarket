import { useEffect } from 'react';

export default function useHistorySync(onBack: () => void) {
  useEffect(() => {
    const handlePopState = () => {
      onBack();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);

  const pushState = () => {
    window.history.pushState(null, ''); // 히스토리 스택에 새로운 상태 추가
  };

  return { pushState };
}
