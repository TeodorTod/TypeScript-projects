import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  mainUrl: string = 'https://swapi.dev/api/people/1';

  

  ngOnInit () {
    let subject$ = new BehaviorSubject<number>(0)
    subject$.subscribe(res => {
      console.log(`Observer 1: ${res}`);
    })
     
    subject$.next(1);

    subject$.subscribe(res => {
      console.log(`Observer 2: ${res}`);
    })
     
    subject$.next(2);

  }

 

  
}
