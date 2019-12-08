import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';

export interface Pizza {
	name: string;
	price: number;
}
export abstract class PizzaService {
	getPizzas: () => Observable<Pizza[]>;
}
@Component({
	selector: 'pizza-viewer',
	templateUrl: './pizza-viewer.component.html',
	styleUrls: [ './pizza-viewer.component.scss' ],
	providers: [ { provide: PizzaService, useExisting: FoodService } ]
})
export class PizzaViewerComponent implements OnInit {
	items$: Observable<Pizza[]>;
	constructor(private foodService: PizzaService) {}

	ngOnInit() {
		this.items$ = this.foodService.getPizzas();
	}
}
