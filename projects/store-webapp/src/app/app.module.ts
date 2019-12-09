import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from './store';
import { SongsModule } from './songs/songs.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, SongsModule ],
	providers: [ Store ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
