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
	constructor(private http: HttpClient, @Inject('api') private api, private store: Store) {}

	getPlaylist(): Observable<Song[]> {
		return this.http
			.get<Song[]>(this.api + 'playlist', { responseType: 'json' })
			.pipe(tap((next) => this.store.set('playlist', next)));
	}

	toggle(data) {
		console.log(data);
	}
}
