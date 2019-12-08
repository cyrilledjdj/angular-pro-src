import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../../food.service';

export interface Drink {
	name: string;
	price: number;
}
@Component({
	selector: 'drink-viewer',
	templateUrl: './drink-viewer.component.html',
	styleUrls: [ './drink-viewer.component.scss' ]
})
export class DrinkViewerComponent implements OnInit {
	items$: Observable<Drink[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getFood('drinks');
	}
}
