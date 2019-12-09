import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { Store } from '../../../store';
import { SongsService, Song } from '../../services/songs.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'songs-listened',
	templateUrl: './songs-listened.component.html',
	styleUrls: [ './songs-listened.component.scss' ]
})
export class SongsListenedComponent implements OnInit {
	listened$: Observable<Song[]>;
	constructor(private store: Store, private songsService: SongsService) {}

	ngOnInit() {
		this.listened$ = this.store
			.select('playlist')
			.pipe(filter(Boolean), map((playlist: Song[]) => playlist.filter((track) => track.listened)));
	}
}
