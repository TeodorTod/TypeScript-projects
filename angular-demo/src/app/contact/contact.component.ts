import { Component } from '@angular/core';
import { IDActivateComponent } from '../Services/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDActivateComponent {
  firstName: any;
  lastName: any;
  country: any;
  subject: any;

  canExit() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm('You have unsaved changes. Do you want to discard?')
    } else {
      return true;
    }
  }
}
