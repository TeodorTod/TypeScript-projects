import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  user?: {name: string, job: string, gender: string, country: string, age: number, avatar: string};

  ngOnInit(): void {
    this.userService.onShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
      this.user = data;
    });
  }
}
