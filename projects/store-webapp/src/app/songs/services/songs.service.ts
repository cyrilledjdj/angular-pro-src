import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Store } from '../../store';
import { Observable } from 'rxjs';

export interface Song {
	id: number;
	artist: string;
	track: string;
	listened: boolean;
	favourite: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class SongsService {
	constructor(private http: HttpClient, @Inject('api') private api, private store: Store) {
		this.api += 'playlist/';
	}

	getPlaylist(): Observable<Song[]> {
		return this.http
			.get<Song[]>(this.api, { responseType: 'json' })
			.pipe(tap((next) => this.store.set('playlist', next)));
	}

	toggle(data) {
		console.log(data.track);
		this.http.put(this.api + data.track.id, data.track).subscribe((track: Song) => {
			const value = this.store.value.playlist;
			const playlist = value.map((song: Song) => {
				if (data.track.id === song.id) {
					return { ...song, ...data.track };
				}
				return song;
			});

			this.store.set('playlist', playlist);
		});
	}
}
