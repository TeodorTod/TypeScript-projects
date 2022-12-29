import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from './Services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent  {
  title = 'angular-demo';

  constructor(private userService: UserService) {

  }


}
