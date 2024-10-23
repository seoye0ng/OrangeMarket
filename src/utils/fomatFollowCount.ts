function formatFollowerCount(count: number) {
  if (count >= 10000) {
    // 10000으로 나눈 후 소수점 둘째 자리에서 반올림
    return (Math.round((count / 10000) * 100) / 100).toFixed(2) + '만';
  }

  return count.toString();
}

export { formatFollowerCount };
