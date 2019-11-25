import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
  }

}
