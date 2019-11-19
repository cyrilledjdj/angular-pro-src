import { Component } from '@angular/core';
import { User } from './auth-form/auth-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pro-src';
  rememberMe = false;

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  rememberUser(rememberMe: boolean) {
    this.rememberMe = rememberMe;
    console.log('Remember me' + (rememberMe ? '!' : ' Not!'))
  }
}
