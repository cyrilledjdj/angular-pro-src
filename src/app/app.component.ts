import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form';

@Component({
  selector: 'app-root',
  template: /* html */`
    <div>
      <div #entry></div>
      <ng-template #tmpl>
      Todd Motto: England UK
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  component: ComponentRef<AuthFormComponent>;

  ngAfterContentInit() {
    // const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // this.entry.createComponent(authFormFactory);
    // this.component = this.entry.createComponent(authFormFactory, 0);
    // console.log(this.component, this.component.instance);
    // this.component.instance.title = 'Create Account';
    // this.component.instance.submitted.subscribe(this.loginUser);
    // this.entry.createComponent(authFormFactory);

    this.entry.createEmbeddedView(this.tmpl);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  destroyComponent() {
    this.component.destroy();
    console.log('destroyed');
    while (this.entry.length) {
      this.entry.get(0).destroy();
    }
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
}
