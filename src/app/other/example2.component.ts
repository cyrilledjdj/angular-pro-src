import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'example2',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: [`
    .example-two {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      <button (click)="update()">Internal update</button>
      <p>* should update</p>
    </div>
  `
})
export class Example2Component {
  @Input()
  user;

  update() {
    this.user.name = 'Scott Raynor';
  }

}
