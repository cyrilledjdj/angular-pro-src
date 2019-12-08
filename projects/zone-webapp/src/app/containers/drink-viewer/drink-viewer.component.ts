import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';

export interface Drink {
	name: string;
	price: number;
}
export abstract class DrinkService {
	getDrinks: () => Observable<Drink[]>;
}
@Component({
	selector: 'drink-viewer',
	templateUrl: './drink-viewer.component.html',
	styleUrls: [ './drink-viewer.component.scss' ],
	providers: [ { provide: DrinkService, useExisting: FoodService } ]
})
export class DrinkViewerComponent implements OnInit {
	items$: Observable<Drink[]>;
	constructor(private foodService: DrinkService) {}

	ngOnInit() {
		this.items$ = this.foodService.getDrinks();
	}
}
