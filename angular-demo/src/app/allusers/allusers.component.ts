import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
    
  }

  ShowDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) {
    this.userService.ShowUserDetails(user);
  }
}
