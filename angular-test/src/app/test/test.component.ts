import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input('theName') name: string = '';
  @Input() age: number = 0;
  @Input() isActive: boolean = true;

  data: string = 'test';

  @Output()
  customEvent: EventEmitter<any> = new EventEmitter<any>();

  onChange() {
    this.customEvent.emit(this.data);
    console.log(this.data);
  }
}
