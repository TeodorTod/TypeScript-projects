import { Component } from '@angular/core';
import { loggerService } from '../Services/logger.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent {
  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService) {

  }

  AddUser() {
    this.userService.addNewUser(this.username, this.status);
    // console.log(this.userService.users);
    
    
  }
}
