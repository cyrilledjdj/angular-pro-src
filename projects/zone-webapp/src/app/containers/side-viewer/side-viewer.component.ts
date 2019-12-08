import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';
import { HttpClient } from '@angular/common/http';

export interface Side {
	name: string;
	price: number;
}

export class SideFoodService extends FoodService {
	constructor(http: HttpClient, api: string) {
		super(http, api);
	}
}

export function SideFactory(http) {
	return new SideFoodService(http, 'http://localhost:3000/sides');
}

@Component({
	selector: 'side-viewer',
	templateUrl: './side-viewer.component.html',
	styleUrls: [ './side-viewer.component.scss' ],
	providers: [
		{ provide: FoodService, useFactory: SideFactory, deps: [ HttpClient ] }
		// { provide: FoodService, useClass: SideFoodService }
	]
})
export class SideViewerComponent implements OnInit {
	items$: Observable<Side[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getFood();
	}
}
