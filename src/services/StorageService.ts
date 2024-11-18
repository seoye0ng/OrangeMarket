import CookieStorage from '@/utils/storage/CookieStorage';
import LocalStorage from '@/utils/storage/LocalStorage';

interface IStorage {
  set(key: string, value: string): void;
  get(key: string): string | null;
  remove(key: string): void;
}

export default class StorageService {
  // setStorageAdapter를 호출하지 않으면 기본값 설정
  private static storage: IStorage = new LocalStorage();

  // 저장소 타입을 초기화
  static setStorageAdapter(type: 'localStorage' | 'cookie'): void {
    if (type === 'localStorage') {
      this.storage = new LocalStorage();
    } else if (type === 'cookie') {
      this.storage = new CookieStorage();
    }
  }

  static set(key: string, value: string): void {
    this.storage.set(key, value);
  }

  static get(key: string): string | null {
    return this.storage.get(key);
  }

  static remove(key: string): void {
    this.storage.remove(key);
  }
}
