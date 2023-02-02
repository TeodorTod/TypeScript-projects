import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private user: User = {
    id: 5,
    'name': 'Misho Howell',
    'username': 'misho',
    'email': 'mi@abv.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  }


  constructor(private http: HttpClient, private userService: UserService) {

  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    )
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user 1')
    )
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    )
  }

  onUpdateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done update user')
    )
  }
  
  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    this.onUpdateUser();

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