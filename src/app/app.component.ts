import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form';

@Component({
  selector: 'app-root',
  template: /* html */`
    <div>
      <auth-form (submitted)="$event"></auth-form>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component: ComponentRef<AuthFormComponent> = this.entry.createComponent(authFormFactory);
    console.log(component, component.instance);
    component.instance.title = 'Create Account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
