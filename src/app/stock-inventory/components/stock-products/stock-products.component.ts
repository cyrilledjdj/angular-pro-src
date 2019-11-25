import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>;

  getProduct(id) {
    return this.map.get(id);
  }

  @Output()
  removed = new EventEmitter<any>();

  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }

}
