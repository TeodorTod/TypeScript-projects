import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.config.apiUrl;
  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    let myParams = new HttpParams().set('page', '6').set('sort', 'true');
    return this.http.get<User[]>(`${this.apiUrl}/users`, {params: myParams})
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/users/${id}`);
  }
}
