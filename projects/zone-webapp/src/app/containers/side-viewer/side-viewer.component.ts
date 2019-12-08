import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';

export interface Side {
	name: string;
	price: number;
}

@Component({
	selector: 'side-viewer',
	templateUrl: './side-viewer.component.html',
	styleUrls: [ './side-viewer.component.scss' ]
})
export class SideViewerComponent implements OnInit {
	items$: Observable<Side[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getFood('sides');
	}
}
