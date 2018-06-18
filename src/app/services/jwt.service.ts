import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  getToken(): String {
    return window.localStorage.getItem('jwt');
  }

  saveToken(token: string) {
    window.localStorage.setItem('jwt', token);
  }

  clearToken() {
    window.localStorage.removeItem('jwt');
  }
}
