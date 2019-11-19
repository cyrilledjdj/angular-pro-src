import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './auth-form';

@Component({
  selector: 'auth-form',
  template: /*html*/`
    <div>
      <form class="d-flex flex-column justify-content-center" #form="ngForm" no-validate (ngSubmit)="onSubmit(form.value)">
        <ng-content select=h3></ng-content>
        <label>
          Email address
          <input ngModel type="email" name="email">
        </label>
        <label>
          Password
          <input ngModel type="password" name="password">
        </label>
        <ng-content select="auth-remember"></ng-content>
        <ng-content select=button></ng-content>
      </form>
      {{form.value | json}}
    </div>
  `,
  styles: []
})
export class AuthFormComponent {
  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(user: User) {
    this.submitted.emit(user);
  }

}
