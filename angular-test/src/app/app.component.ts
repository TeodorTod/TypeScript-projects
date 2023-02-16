import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DemoComponent } from './demo/demo.component';
import { DestService } from './service/dest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  userobservable$: any;
  status: any;

  constructor(private service: DestService) {
      
  }  



  

  ngOnInit(): void {
    
  }

}

if (typeof Worker !== 'undefined') {
  // Create aa new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}