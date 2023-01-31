import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private http: HttpClient, private userService: UserService) {

  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    )
  }

  getUser(): void {
    this.userService.getUser().subscribe((res) => {
      console.log(res.address.street);
      
    }
    )
  }
  
  ngOnInit(): void {
    this.onGetUsers();
    this.getUser();
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