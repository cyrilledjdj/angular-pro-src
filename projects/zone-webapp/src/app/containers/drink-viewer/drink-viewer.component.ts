import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';

export interface Drink {
	name: string;
	price: number;
}
class DrinkFoodService extends FoodService {
	type = 'drinks';
}
@Component({
	selector: 'drink-viewer',
	templateUrl: './drink-viewer.component.html',
	styleUrls: [ './drink-viewer.component.scss' ],
	providers: [ { provide: FoodService, useClass: DrinkFoodService } ]
})
export class DrinkViewerComponent implements OnInit {
	items$: Observable<Drink[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getFood();
	}
}
