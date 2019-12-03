import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = { isAdmin: true };

  checkPermissions(): Observable<boolean> {
    return of(this.user.isAdmin);
  }

  isLoggedIn(): Observable<boolean> {
    return of(true);
  }
}
