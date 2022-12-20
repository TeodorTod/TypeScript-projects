import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <button (click)="onClick()">{{name}}</button>
    <div class="alert alert-info" [hidden]="displayNotification">
      <p>This website use cookies for better user experience</p>
    </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;
  name: string = 'Hide';

  onClick() {
    this.displayNotification = !this.displayNotification;
    if (this.displayNotification == true) {
      this.name = 'Show cookies';
    } else {
      this.name = 'Hide';
    }
  }

}
