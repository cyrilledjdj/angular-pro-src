import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SongsService } from './services/songs.service';
import { SongsFavouritesComponent } from './songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './songs-playlist/songs-playlist.component';

@NgModule({
	declarations: [ SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent ],
	exports: [ SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent ],
	imports: [ CommonModule, HttpClientModule ],
	providers: [ SongsService, { provide: 'api', useValue: 'http://localhost:3000/' } ]
})
export class SongsModule {}
