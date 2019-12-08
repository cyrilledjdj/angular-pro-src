import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';
import { HttpClient } from '@angular/common/http';

export interface Side {
	name: string;
	price: number;
}

export abstract class SideService {
	getSides: () => Observable<Side[]>;
}

@Component({
	selector: 'side-viewer',
	templateUrl: './side-viewer.component.html',
	styleUrls: [ './side-viewer.component.scss' ],
	providers: [ { provide: SideService, useExisting: FoodService } ]
})
export class SideViewerComponent implements OnInit {
	items$: Observable<Side[]>;
	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.items$ = this.foodService.getSides();
	}
}
