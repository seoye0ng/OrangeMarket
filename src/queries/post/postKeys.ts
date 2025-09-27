export const postKeys = {
  all: ['post'] as const,
  listAll: () => [...postKeys.all, 'list'] as const,
  list: ({ accountName }: { accountName: string }) =>
    [...postKeys.all, { accountName }] as const,
  detail: (id: string) => [...postKeys.all, 'detail', id] as const,
};
