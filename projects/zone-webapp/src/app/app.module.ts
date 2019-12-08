import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkViewerComponent } from './containers/drink-viewer/drink-viewer.component';
import { PizzaViewerComponent } from './containers/pizza-viewer/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer/side-viewer.component';
import { API_TOKEN } from './token';

@NgModule({
	declarations: [ AppComponent, DrinkViewerComponent, PizzaViewerComponent, SideViewerComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [ { provide: API_TOKEN, useValue: 'http://localhost:3000/' } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
