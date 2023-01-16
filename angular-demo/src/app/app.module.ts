import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CoursesService } from './Services/courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './Services/course-guard.service';
import { AuthService } from './Services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService, CourseGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
