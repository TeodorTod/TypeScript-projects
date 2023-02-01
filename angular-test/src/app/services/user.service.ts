import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.config.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }
}
