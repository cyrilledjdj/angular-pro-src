import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
  providers: []
})
export class StockInventoryComponent implements OnInit {
  form: FormGroup = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    })
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }

}
