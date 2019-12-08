import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { API_TOKEN } from '../token';

@Injectable()
export class FoodStoreService {
	constructor(
		private http: HttpClient,
		@Inject(API_TOKEN) private api: string,
		@Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
	) {}

	getStore() {
		return this.http
			.get(`${this.api}stores`, {
				responseType: 'json',
				headers: {
					id: this.config.storeId.toString(),
					token: this.config.storeToken
				}
			})
			.pipe(map((res) => res[0]));
	}
}
