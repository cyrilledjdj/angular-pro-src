import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';

export interface Pizza {
	name: string;
	price: number;
}

class PizzaFoodService extends FoodService {
	type = 'pizzas';
}
@Component({
	selector: 'pizza-viewer',
	templateUrl: './pizza-viewer.component.html',
	styleUrls: [ './pizza-viewer.component.scss' ],
	providers: [ { provide: FoodService, useClass: PizzaFoodService } ]
})
export class PizzaViewerComponent implements OnInit {
	items$: Observable<Pizza[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getFood();
	}
}
