export const searchKeys = {
  all: ['search'] as const,
  list: (keyword: string) => [...searchKeys.all, 'list', keyword] as const,
};
