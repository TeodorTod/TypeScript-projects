import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  @ViewChild('dobInput') dateOfBirth: any = ElementRef;
  @ViewChild('ageInput') age: any = ElementRef;
  @ViewChild(TestComponent, {static: true}) testComp: any = TestComponent;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
  }
}
