import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  onEnrollClicked(title: string) {
    alert(`${title}`);
  }

}
