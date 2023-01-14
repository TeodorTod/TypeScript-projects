import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private service: CoursesService, private route: ActivatedRoute, private router: Router) { }

  course: any;
  courseId: any;
  RouteParamObservable: any;
  editMode: boolean = false;

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // console.log(this.courseId);
    
    //this.courseId = this.route.snapshot.params['name'];
    this.RouteParamObservable = this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);
    })

    // this.editMode = Boolean(this.route.snapshot.queryParamMap.get('edit'));

    this.route.queryParamMap.subscribe((param) => {
      
    })
    console.log(this.editMode);
    
  }

  ngOnDestroy() {
    this.RouteParamObservable.unsubscribe();
  }

  appendQuerryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}});
  }

}
