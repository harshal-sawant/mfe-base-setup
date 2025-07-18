import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setToken(token: string): void {
    console.log('Setting token:', token);
    localStorage.setItem('authToken', token);
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }

  getToken(): string | null {
    console.log('Getting token');
    return localStorage.getItem('authToken');
  }
}
