/* eslint-disable class-methods-use-this */
import Cookies from 'js-cookie';

export default class CookieStorage {
  set(key: string, value: string): void {
    Cookies.set(key, value, { expires: 7, path: '' }); // 7일 후 만료
  }

  get(key: string): string | null {
    return Cookies.get(key) || null;
  }

  remove(key: string): void {
    Cookies.remove(key);
  }
}
