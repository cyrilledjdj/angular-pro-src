import { AfterContentInit, Component, ContentChild, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { User } from './auth-form';
import { AuthRememberComponent } from './auth-remember.component';

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
        <div *ngIf="showMessage">
          You will be logged in for 30 days;
        </div>
        <ng-content select=button></ng-content>
      </form>
      {{form.value | json}}
    </div>
  `,
  styles: []
})
export class AuthFormComponent implements AfterContentInit {

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  showMessage: boolean;

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(user: User) {
    this.submitted.emit(user);
  }

  ngAfterContentInit() {
    if (this.remember) {
      console.log(this.remember);
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      // this.remember.checked.subscribe((checked: boolean) => {
      //   this.showMessage = checked;
      // });
    }
  }
}
