import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Store } from '../../store';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SongsService {
	constructor(private http: HttpClient, @Inject('api') private api, private store: Store) {}

	getPlaylist(): Observable<any[]> {
		return this.http
			.get<any[]>(this.api + 'playlist', { responseType: 'json' })
			.pipe(tap((next) => this.store.set('playlist', next)));
	}
}
