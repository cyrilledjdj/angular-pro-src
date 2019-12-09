import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SongsService } from './services/songs.service';
import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';

@NgModule({
	declarations: [ SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent, SongsListComponent ],
	exports: [ SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent ],
	imports: [ CommonModule, HttpClientModule ],
	providers: [ SongsService, { provide: 'api', useValue: 'http://localhost:3000/' } ]
})
export class SongsModule {}
