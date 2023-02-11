import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  userobservable$: any;
  status: any;

  ngOnInit(): void {
    this.users = ['misho', 'petko', 'gosho'];
    this.userobservable$=of(this.users);
    new Observable(item => {

      setTimeout(() => {
        item.next('in Progress')
      }, 2000)

      setTimeout(() => {
        item.next('Pending')
      }, 4000)

      setTimeout(() => {
        item.next('Done')
      }, 6000)
    }).subscribe(res => {
      this.status = res;
      
    })
    
  
   
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