import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss'],
  providers: []
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro' },
    { id: 2, price: 50, name: 'USB-C Adaptor' },
    { id: 3, price: 400, name: 'iPod' },
    { id: 4, price: 900, name: 'iPhone' },
    { id: 5, price: 600, name: 'Apple Watch' },
  ];

  form: FormGroup = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ])
  });

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }

  addStock(stock) {
    (this.form.get('stock') as FormArray).push(this.createStock(stock));
  }
  removeStock(stockIndex) {
    (this.form.get('stock') as FormArray).removeAt(stockIndex);
  }

}
