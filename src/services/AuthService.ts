import StorageService from './StorageService';

class AuthService {
  private static userAccount: string | null = StorageService.get('userAccount');

  static login(userAccount: string): void {
    this.userAccount = userAccount;
    StorageService.setStorageAdapter('localStorage');
    StorageService.set('userAccount', userAccount);
  }

  static logout(): void {
    this.userAccount = null;
    StorageService.setStorageAdapter('localStorage');
    StorageService.remove('userAccount');
  }

  static getUser(): string | null {
    return this.userAccount || StorageService.get('userAccount');
  }

  static isAuthenticated(): boolean {
    return !!this.userAccount;
  }
}

export default AuthService;
