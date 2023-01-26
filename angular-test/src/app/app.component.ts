import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public hero: any;

  constructor(private http: HttpClient,
    private appService: AppService) {

  }

  search() {
    return this.http
      .get('https://swapi.dev/api/people/1')
      .subscribe(res => {
        console.log(res);
        
      })
  }
  


  ngOnInit(): void {

    this.appService.getData()
      .subscribe(data => this.hero = data)
    
      
    //promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise working')
        resolve('Promise working1')
        resolve('Promise working2')
      }, 2000)
    })
    promise.then(result => console.log(result))


    // fetch('https://swapi.dev/api/people/1')
    //   .then(res => res.json())
    //   .then(result => {
    //     console.log(result);
        
    //   })
    

    //observable
    const observable = new Observable(sub => {
      setTimeout(() => {
        sub.next('Observable working')
        sub.next('Observable working1')
        sub.next('Observable working2')
        sub.next('Observable working3')
      }, 2000)
    });

    observable.subscribe(result => console.log(result))
  }

  onClick() {
    localStorage.setItem('token', 'xhja787')
    console.log(this.hero);
    
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