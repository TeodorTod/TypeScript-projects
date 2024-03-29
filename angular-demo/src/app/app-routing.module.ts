import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CandeactivateGuardService } from './Services/candeactivate-guard.service';
import { CourseGuardService } from './Services/course-guard.service';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', canDeactivate: [CandeactivateGuardService], component: ContactComponent },
  { path: 'courses', component: CoursesComponent, canActivateChild: [CourseGuardService] },
  // {path: 'courses/course/:id', component: CourseComponent},
  {
    path: 'courses', children: [
      { path: 'course/:id', component: CourseComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
