import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { loggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, loggerService]
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  constructor(private userService: UserService, private loggerService: loggerService) {

  }

  users: { name: string, status: string }[] = [];

  ngOnInit() {
    this.users = this.userService.users
  }

}
