import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SongsFavouritesComponent } from './songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './songs-playlist/songs-playlist.component';

@NgModule({
	declarations: [ SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent ],
	exports: [ SongsFavouritesComponent, SongsListenedComponent, SongsPlaylistComponent ],
	imports: [ CommonModule, HttpClientModule ]
})
export class SongsModule {}
