import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, interval, map, Observable, of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  data$ = interval(1000);
  users = [
    { id: 1, name: 'Gosho', isActive: true },
    { id: 2, name: 'Pesho', isActive: true },
    { id: 3, name: 'Misho', isActive: true },
  ];

  user$ = new BehaviorSubject<{ id: string, name: string } | null>(null)

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) => users.map(user => user.name)))
  activeUsers$ = this.users$.pipe(filter((users) => users.every((user) => user.isActive)))

  constructor() {

  }

  ngOnInit(): void {
    this.data$.pipe(takeWhile(value => value <= 5)).subscribe(res => {
      console.log(`data: ${res}`);
    })




    this.user$.next({ id: '2', name: 'pesho' })

    setTimeout(() => {
      this.user$.next({ id: '1', name: 'ivan' })
    }, 2000)

    this.user$.subscribe(res => console.log(res)
    )
  }





}

if (typeof Worker !== 'undefined') {
  // Create aa new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}