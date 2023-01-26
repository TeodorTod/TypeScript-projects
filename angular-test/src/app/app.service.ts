import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url: string = 'https://swapi.dev/api/people/1';

  constructor(private http: HttpClient) { }

  getData(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url)
  }
}
