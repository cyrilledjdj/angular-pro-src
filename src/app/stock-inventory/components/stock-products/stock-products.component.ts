import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Output()
  removed = new EventEmitter<any>();

  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
  }

  onRemove(index) {
    this.removed.emit(index);
  }

}
