import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="alert alert-info">
      <p>This website use cookies for better user experience</p>
    </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center}"]
})
export class NotificationComponent {

}
