import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { MailViewComponent } from './mail-view.component';



@Injectable({
  providedIn: 'root'
})
export class MailViewGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<MailViewComponent> {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(component: MailViewComponent) {
    console.log('canDeactivate', component);
    if (component.hasUnsavedChanges) {
      return window.confirm('Are you sure about leaving');
    }
    return true;
  }
}
