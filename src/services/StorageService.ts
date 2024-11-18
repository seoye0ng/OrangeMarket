import { cookieStorage } from '@/utils/storage/cookieStorage';
import { localStorage } from '@/utils/storage/localStorage';

interface IStorage {
  set(key: string, value: string, options?: Cookies.CookieAttributes): void;
  get(key: string): string | null;
  remove(key: string): void;
}
const storageMap = {
  localStorage,
  cookieStorage,
};

export default class StorageService {
  // setStorageAdapter를 호출하지 않으면 기본값 설정
  private static storage: IStorage = localStorage;

  // 저장소 타입을 초기화
  static setStorageAdapter(type: 'localStorage' | 'cookieStorage'): void {
    this.storage = storageMap[type];
  }

  static set(
    key: string,
    value: string,
    options?: Cookies.CookieAttributes,
  ): void {
    this.storage.set(key, value, options);
  }

  static get(key: string): string | null {
    return this.storage.get(key);
  }

  static remove(key: string): void {
    this.storage.remove(key);
  }
}
