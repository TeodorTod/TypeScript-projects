import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(DemoComponent) private child:any = DemoComponent

  title = 'test';
  myNums: any = ''

  // constructor() {
  //   this.calculations();

  ngAfterViewInit() {
    this.child.logData()
  }
  // }

  getVal(item: any) {
    console.log(item);
    
  }


  onClick() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}

