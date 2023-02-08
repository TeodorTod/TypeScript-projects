import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import { User } from './interface/user';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users = [
    {id: '1', name: 'John', isActive: true},
    {id: '2', name: 'Peter', isActive: true},
    {id: '3', name: 'Mike', isActive: true}
  ]

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)))


  constructor(private http: HttpClient, private userService: UserService) {

  }

  

  ngOnInit(): void {
   console.log(this.usernames$.subscribe(res => {
    console.log(res);
    
   }));
   
  }

  onClick() {
    localStorage.setItem('token', 'xhja787')

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