import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from './containers/drink-viewer/drink-viewer.component';
import { Pizza } from './containers/pizza-viewer/pizza-viewer.component';
import { Side } from './containers/side-viewer/side-viewer.component';
import { API_TOKEN } from './token';

@Injectable({
	providedIn: 'root'
})
export class FoodService {
	type: string;
	constructor(private http: HttpClient, @Inject(API_TOKEN) private api: string) {
		console.log('Ultimate Cyrille');
	}

	getDrinks(): Observable<Drink[]> {
		return this.http.get<any[]>(this.api + 'drinks', { responseType: 'json' });
	}
	getPizzas(): Observable<Pizza[]> {
		return this.http.get<any[]>(this.api + 'pizzas', { responseType: 'json' });
	}
	getSides(): Observable<Side[]> {
		return this.http.get<any[]>(this.api + 'sides', { responseType: 'json' });
	}
}
