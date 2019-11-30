import { Component, OnInit } from '@angular/core';
import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private stService: StockInventoryService) {
    stService.getProducts().subscribe(data => console.log('appcomponent', data))
  }
}
