import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from './containers/drink-viewer/drink-viewer.component';
import { Pizza } from './containers/pizza-viewer/pizza-viewer.component';
import { Side } from './containers/side-viewer/side-viewer.component';
import { API_TOKEN } from './token';

type Food = Drink | Pizza | Side;

@Injectable({
	providedIn: 'root'
})
export class FoodService {
	constructor(private http: HttpClient, @Inject(API_TOKEN) private api: string) {}

	getFood(type?): Observable<Food[]> {
		return this.http.get<any[]>(this.api + type, { responseType: 'json' });
	}
}
