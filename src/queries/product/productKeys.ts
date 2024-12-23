export const productKeys = {
  all: ['product'] as const,
  list: (accountName: string) =>
    [...productKeys.all, 'list', accountName] as const,
};
