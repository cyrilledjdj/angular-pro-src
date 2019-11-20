import { Component } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: /* html */`
    <p>
      You will be logged in for {{days}} days
    </p>
  `,
  styles: []
})
export class AuthMessageComponent {
  days = 7;
}
