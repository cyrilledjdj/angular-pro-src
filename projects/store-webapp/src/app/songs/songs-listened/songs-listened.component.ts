import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';

@Component({
	selector: 'songs-listened',
	templateUrl: './songs-listened.component.html',
	styleUrls: [ './songs-listened.component.scss' ]
})
export class SongsListenedComponent implements OnInit {
	listened$;
	constructor(private store: Store, private songsService: SongsService) {}

	ngOnInit() {
		this.listened$ = this.store.select('playlist');
	}
}
