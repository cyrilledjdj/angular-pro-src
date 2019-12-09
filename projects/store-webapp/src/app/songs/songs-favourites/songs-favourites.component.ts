import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';

@Component({
	selector: 'songs-favourites',
	templateUrl: './songs-favourites.component.html',
	styleUrls: [ './songs-favourites.component.scss' ]
})
export class SongsFavouritesComponent implements OnInit {
	favourites$;
	constructor(private store: Store, songsService: SongsService) {}

	ngOnInit() {
		this.favourites$ = this.store.select('playlist');
	}
}
