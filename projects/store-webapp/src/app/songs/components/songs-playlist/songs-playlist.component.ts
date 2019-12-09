import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '../../../store';
import { SongsService, Song } from '../../services/songs.service';

@Component({
	selector: 'songs-playlist',
	templateUrl: './songs-playlist.component.html',
	styleUrls: [ './songs-playlist.component.scss' ]
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
	playlist$: Observable<Song[]>;
	subscription: Subscription;
	constructor(private store: Store, private songsService: SongsService) {}

	ngOnInit() {
		this.playlist$ = this.store.select('playlist');
		this.subscription = this.songsService.getPlaylist().subscribe();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
