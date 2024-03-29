import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockInventoryService } from './services/stock-inventory.service';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';



@NgModule({
  declarations: [StockInventoryComponent, StockBranchComponent, StockProductsComponent, StockSelectorComponent, StockCounterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StockInventoryService],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule { }
