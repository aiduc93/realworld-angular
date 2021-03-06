import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { UserResponse, UserPost } from '../models/user';
import { JwtService } from './jwt.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<UserResponse>({} as UserResponse);
  //using asObservable because I dont want to leak the result. 
  //This result will not can override by using 'next' of Observable
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());


  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  checkUserInLocalStorage():  Observable<UserResponse> {
    if (this.jwtService.getToken()) {
      return this.apiService.get('/user').pipe(map(data => {
        return data['user'];
      }));
    } else {
      this.clearAuth();
    }
  }

  updateUser(user): Observable<UserPost> {
    return this.apiService.put('/user', user).pipe(map(data => {
      this.currentUserSubject.next(data['user']);
      return data['user'];
    }), )
  }

  attemptAuth(type, credentials) {
    const route = (type === 'signin') ? '/login' : '';
    return this.apiService.post('/users' + route, credentials)
      .pipe(map(
        data => {
          this.setAuth(data['user']);
          return data;
        }
      ));
  }

  setAuth(user: UserResponse) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  clearAuth() {
    this.jwtService.clearToken();
    this.currentUserSubject.next({} as UserResponse);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): UserResponse {
    return this.currentUserSubject.value;
  }
}
