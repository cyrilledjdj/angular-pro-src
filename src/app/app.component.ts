import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form';

@Component({
  selector: 'app-root',
  template: /* html */`
    <div>
      <ng-container #entry [ngTemplateOutlet]=tmpl [ngTemplateOutletContext]=ctx></ng-container>
      <ng-template #tmpl let-name let-location="location">
      {{name}}: {{location}}
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
  ctx = {
    $implicit: 'Cyrille',
    location: 'England UK'
  };

  ngAfterContentInit() {
    // const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // this.entry.createComponent(authFormFactory);
    // this.component = this.entry.createComponent(authFormFactory, 0);
    // console.log(this.component, this.component.instance);
    // this.component.instance.title = 'Create Account';
    // this.component.instance.submitted.subscribe(this.loginUser);
    // this.entry.createComponent(authFormFactory);

    // this.entry.createEmbeddedView(this.tmpl, this.ctx);
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
