import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../../food.service';
export interface Pizza {
	name: string;
	price: number;
}
@Component({
	selector: 'pizza-viewer',
	templateUrl: './pizza-viewer.component.html',
	styleUrls: [ './pizza-viewer.component.scss' ]
})
export class PizzaViewerComponent implements OnInit {
	items$: Observable<Pizza[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getFood('pizzas');
	}
}
