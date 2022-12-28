import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
// import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService]
})
export class AngularComponent{
  title="Angular";

  // constructor(private enrollService: EnrollService){

  // }

  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.onEnrollClicked(this.title);
  }
}
