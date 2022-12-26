import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() value = '';

  constructor() {
    console.log('constructor called');
    
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('onChanges log');
    console.log(change);
    
    
  }

  ngOnInit() {
    console.log('ngOnInit called');
    
  }

  ngDoCheck(): void {
    console.log('doCheck calls');
    
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit calls');
    
  }
 
}
