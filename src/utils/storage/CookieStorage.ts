import Cookies from 'js-cookie';

export const cookieStorage = {
  set(key: string, value: string, options?: Cookies.CookieAttributes): void {
    Cookies.set(key, value, options);
  },
  get(key: string): string | null {
    return Cookies.get(key) || null;
  },
  remove(key: string): void {
    Cookies.remove(key);
  },
};
