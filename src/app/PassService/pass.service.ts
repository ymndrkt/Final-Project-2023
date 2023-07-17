import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private password: string = 'admin';

  getPassword(): string {
    return this.password;
  }

  setPassword(newPassword: string) {
    this.password = newPassword;
  }
}
