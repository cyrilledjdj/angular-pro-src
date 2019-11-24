import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: /* html */`
  <div>
    <stock-inventory></stock-inventory>
  </div>
  `
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}
