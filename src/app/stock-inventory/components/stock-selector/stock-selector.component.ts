import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  @Input()
  parent: FormGroup;
  @Input()
  products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
