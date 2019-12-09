import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'songs-listened',
	templateUrl: './songs-listened.component.html',
	styleUrls: [ './songs-listened.component.scss' ]
})
export class SongsListenedComponent implements OnInit {
	listened$;
	constructor(private store: Store, private songsService: SongsService) {}

	ngOnInit() {
		this.listened$ = this.store
			.select('playlist')
			.pipe(filter(Boolean), map((playlist: any[]) => playlist.filter((track) => track.favourite)));
	}
}
