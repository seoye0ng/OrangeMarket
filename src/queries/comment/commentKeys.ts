export const commentKeys = {
  all: ['comment'] as const,
  list: (id: string) => [...commentKeys.all, 'list', id] as const,
};
