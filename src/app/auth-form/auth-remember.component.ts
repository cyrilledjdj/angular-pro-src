import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: /* html */`
    <label>
      <input type=checkbox (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>
  `,
  styles: []
})
export class AuthRememberComponent {

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}
