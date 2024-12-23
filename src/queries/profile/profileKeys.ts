export const profileKeys = {
  all: ['profile'] as const,
  detail: (accountName: string) =>
    [...profileKeys.all, 'detail', accountName] as const,
};
