import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private route: Router) {

  }

  navigateToHome() {  
    // this.route.navigate(['home'])
    this.route.navigateByUrl('home')
  }
}
