import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Output, QueryList, Renderer, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from './auth-form';
import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  template: /*html*/`
    <div>
      <form #form="ngForm" no-validate (ngSubmit)="onSubmit(form.value)">
        <ng-content select=h3></ng-content>
        <label>
          Email address
          <input ngModel type="email" name="email" #email>
        </label>
        <label>
          Password
          <input ngModel type="password" name="password">
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <ng-content select=button></ng-content>
      </form>
      {{form.value | json}}
    </div>
  `,
  styles: [/* css */`.email{border-color: #9f72e6}`]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @ViewChildren(AuthMessageComponent)
  message: QueryList<AuthMessageComponent>;

  @ViewChild('email', { static: true }) email: ElementRef<HTMLInputElement>;
  showMessage: boolean;

  constructor(
    private renderer: Renderer2,
    private oldRenderer: Renderer,
    private cd: ChangeDetectorRef) {

  }

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(user: User) {
    this.submitted.emit(user);
  }

  ngAfterContentInit() {
    if (this.remember) {
      // console.log(this.remember);
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      // this.remember.checked.subscribe((checked: boolean) => {
      //   this.showMessage = checked;
      // });
    }
  }
  ngAfterViewInit() {
    // console.log('AfterViewInit', this.message);
    console.log('email', this.email.nativeElement);
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address.');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address.');
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.email.nativeElement.focus();
    if (this.message) {
      this.message.forEach((message: AuthMessageComponent) => message.days = 30);
    }
    this.cd.detectChanges();
  }
}
