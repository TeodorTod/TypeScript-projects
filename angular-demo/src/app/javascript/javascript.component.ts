import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
// import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollService]
})
export class JavascriptComponent{
  title = "JavaScript";

  // constructor(private enrollService: EnrollService){

  // }

  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.onEnrollClicked(this.title);
  }
}
