export const postKeys = {
  all: ['post'] as const,
  listAll: ({ limit }: { limit: number }) =>
    [...postKeys.all, 'list', { limit }] as const,
  list: ({ limit, accountName }: { limit: number; accountName: string }) =>
    [...postKeys.all, { limit, accountName }] as const,
  detail: (id: string) => [...postKeys.all, 'detail', id] as const,
};
