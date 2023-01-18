import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';

// @Injectable({
//   providedIn: 'root'
// })

export interface IDActivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CandeactivateGuardService implements CanDeactivate<IDActivateComponent> {

  constructor( ) { }

  canDeactivate(component: IDActivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
    return component.canExit();
  }
}
