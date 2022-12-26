import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  currentItem = 'academy';

  inputText: string = '';

  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
    
  }

}
