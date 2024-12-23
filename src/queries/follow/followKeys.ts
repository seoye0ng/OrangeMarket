export const followKeys = {
  all: ['follow'] as const,
  list: ({
    type,
    accountName,
    limit,
  }: {
    type: 'following' | 'follower';
    accountName: string;
    limit: number;
  }) => [...followKeys.all, 'list', { type, accountName, limit }] as const,
};
