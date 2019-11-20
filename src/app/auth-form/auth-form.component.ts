import { AfterContentInit, AfterViewInit, Component, ContentChildren, EventEmitter, Output, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { User } from './auth-form';
import { AuthMessageComponent } from './auth-message.component';
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
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <ng-content select=button></ng-content>
      </form>
      {{form.value | json}}
    </div>
  `,
  styles: []
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @ViewChildren(AuthMessageComponent)
  message: QueryList<AuthMessageComponent>;
  showMessage: boolean;

  constructor(private cd: ChangeDetectorRef) {

  }

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
  ngAfterViewInit() {
    console.log('AfterViewInit', this.message);
    if (this.message) {
      this.message.forEach((message: AuthMessageComponent) => message.days = 30);
    }
    this.cd.detectChanges();
  }
}
