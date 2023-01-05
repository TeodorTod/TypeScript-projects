import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  title = 'angular-demo';
  posts: any = [];
  createdPost: any = [];

  constructor(private http: HttpClient, private dataService: DataService) {
    // this.loadPosts();
    // this.createPost();
    
  }

  // loadPosts() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((res) => {
  //       this.posts = res;
  //     })
  // }

  // createPost() {
  //   this.http
  //     .post('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         title: 'foo',
  //         body: 'bar',
  //         userId: 1,
  //       }),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     })
  //     .subscribe((res: any) => {
  //       // this.createPost = res;
  //       console.log(res);
        
        
  //     }), (err: any) =>(alert(JSON.stringify(err))) 
  // }

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   observer.next('1')
  //   observer.next('2')
  //   observer.next('3')
  //   // observer.error(new Error('Something went wrong'))
  //   observer.next('4')
  //   observer.next('5')
  //   observer.complete()
  // });

  myObservable = Observable.create((observer: any) => {
    console.log('Observable starts');
    observer.next('1')
    observer.next('2')
    observer.next('3')
    // observer.error(new Error('Something went wrong'))
    observer.next('4')
    observer.next('5')
    observer.complete()
  }).pipe(map((val: any) => {
    return val * 5;
  }), filter((val: any) => {
    return val >= 15
  }));
  

  // transformedObservable = this.myObservable.pipe(map((val: any) => {
  //   return val * 5;
  // }), filter((val: any) => {
  //   return val >= 15
  // }))

  // filterObs = this.transformedObservable.pipe(filter((val: any) => {
  //   return val >= 15
  // }))

  ngOnInit() {
    this.myObservable.subscribe((val: any) => {
      console.log(`The value from Observable is ${val}`);
      
    }, (error: any) => {
      alert(error.message);
      
    }, () => {
      console.log('finito');
      
    })
  }

  
}
