import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

 @Input('total') all: number = 0;
 @Input() free: number = 0;
 @Input() premium: number = 0;

 selectedRadioButtonValue: string = 'All';

 @Output()
 filterButton: EventEmitter<string> = new EventEmitter<string>;

 onRadioChange() {
  this.filterButton.emit(this.selectedRadioButtonValue);
 }
}
