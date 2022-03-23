import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  userName = '';

  login(userName: string, password: string): void {
    // Authentication for very honest people TM
    this.userName = userName;
  }

  logout(): void {
    this.userName = '';
  }
}
