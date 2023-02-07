import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
    
  });

  constructor(private coursesService: CoursesService) { }

  courses: any = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.myObservable.subscribe((val) => {
      console.log(val);
      
    });
  }

}
