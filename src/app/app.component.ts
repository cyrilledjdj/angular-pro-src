import { Component, OnInit } from '@angular/core';
import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';


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

  constructor(private stService: StockInventoryService) {
    stService.getProducts().subscribe(data => console.log('appcomponent', data))
  }
}
