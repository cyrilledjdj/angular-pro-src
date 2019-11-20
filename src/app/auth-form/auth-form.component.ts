import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './auth-form';


@Component({
  selector: 'auth-form',
  styles: [/* css */`
    .email { border-color: #9f72e6; }
  `],
  template: /* html */`
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">
          {{ title }}
        </button>
      </form>
    </div>
  `
})
export class AuthFormComponent {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}