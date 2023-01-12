import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private service: CoursesService, private route: ActivatedRoute) { }

  course: any;
  courseId: any;
  RouteParamObservable: any;

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // console.log(this.courseId);
    
    //this.courseId = this.route.snapshot.params['name'];
    this.RouteParamObservable = this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);
    })
  }

  ngOnDestroy() {
    this.RouteParamObservable.unsubscribe();
  }

}
