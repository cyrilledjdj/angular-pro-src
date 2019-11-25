import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
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

  form: FormGroup = this.fb.group({
    store: this.fb.group({
      branch: this.fb.control(''),
      code: this.fb.control('')
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ])
  });


  createStock(stock) {
    return this.fb.group({
      product_id: this.fb.control(parseInt(stock.product_id, 10) || ''),
      quantity: this.fb.control(stock.quantity || 10)
    });
  }
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }

  addStock(stock) {
    (this.form.get('stock') as FormArray).push(this.createStock(stock));
  }
  removeStock({ group, index }: { group: FormGroup, index: number }) {
    console.log('Removing: ', group);
    (this.form.get('stock') as FormArray).removeAt(index);
  }

}
