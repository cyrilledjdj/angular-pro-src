import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { FileSizePipe } from './file-size/file-size.pipe';
import { MyForDirective } from './my-for/my-for.directive';
import { ExampleOneComponent } from './one/example-one.component';
import { Example1Component } from './other/example1.component';
import { Example2Component } from './other/example2.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { ExampleThreeComponent } from './three/example-three.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { ExampleTwoComponent } from './two/example-two.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    Example1Component,
    Example2Component,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule,
    StockInventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
