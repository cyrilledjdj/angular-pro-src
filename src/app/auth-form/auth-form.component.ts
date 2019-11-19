import { Component, OnInit } from '@angular/core';
import { User } from './auth-form';

@Component({
  selector: 'auth-form',
  template: /*html*/`
    <div>
      <form class="d-flex flex-column justify-content-center" #form="ngForm" no-validate (ngSubmit)="onSubmit(form.value)">
        <ng-content></ng-content>
        <label>
          Email address
          <input type=email name=email [attr.id]=emailId>
        </label>
        <label>
          Password
          <input type=password name=password [attr.id]=passwordId>
        </label>
        <button type=submit>
          Submit
        </button>
      </form>
      {{form.value | json}}
    </div>
  `,
  styles: []
})
export class AuthFormComponent implements OnInit {
  static count = 0;
  current = AuthFormComponent.count++;
  emailId = 'email-' + this.current;
  passwordId = 'password-' + this.current;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    console.log(user);
  }

}
