import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestService {

subjectStatus$ = new Subject<number>();
bsubjectStatus$ = new BehaviorSubject<string>('Not started');


  statusInfo () {
    const deliveryStatus$ = new Observable(item => {
      item.next('Created')

      setTimeout(() => {
        item.next('Confirmed')
      }, 2000)

      setTimeout(() => {
        item.next('Prepared')
      }, 4000)

      setTimeout(() => {
        item.next('Finished')
      }, 6000)
    })
    return deliveryStatus$;
  }

}
