import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token:string = '';
  constructor(
    private http: HttpClient
  ) { }

  get<T>(path: string, params ?: HttpParams): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${path}`,  { params });
  }

  post<T>(path: string, param: HttpParams): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${path}`, param);
  }

  put<T>(path: string, param: HttpParams): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}${path}`, param);
  }


  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${environment.apiUrl}${path}`);
  }
}
