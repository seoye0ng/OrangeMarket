import StorageService from './StorageService';

class AuthService {
  private static userAccount: string | null = StorageService.get('userAccount');
  private static token: string | null = StorageService.get('token');

  static login(userAccount: string, token: string): void {
    this.userAccount = userAccount;
    this.token = token;
    StorageService.setStorageAdapter('localStorage');
    StorageService.set('userAccount', userAccount);
    StorageService.setStorageAdapter('cookieStorage');
    StorageService.set('token', token, {
      expires: 3,
      path: '',
    });
  }

  static logout(): void {
    this.userAccount = null;
    this.token = null;
    StorageService.setStorageAdapter('localStorage');
    StorageService.remove('userAccount');
    StorageService.setStorageAdapter('cookieStorage');
    StorageService.remove('token');
  }

  static getUser(): string | null {
    return this.userAccount || StorageService.get('userAccount');
  }

  static getToken(): string | null {
    return this.token || StorageService.get('token');
  }

  static isAuthenticated(): boolean {
    return !!this.userAccount && !!this.token;
  }
}

export default AuthService;
