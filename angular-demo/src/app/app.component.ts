import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'angular-demo';
  displayLoader: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value) => {
    this.jumpTo(value);
    });

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoader = true;
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel) {
        this.displayLoader = false;
      }
    });
  }

  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
  
}
