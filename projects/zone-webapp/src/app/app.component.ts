import { Component, OnInit, DoCheck, NgZone } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, DoCheck {
	title = 'zone-webapp';
	store$ = this.foodService.getStore();
	constructor(private foodService: FoodStoreService, private zone: NgZone) {}

	counter = 0;

	ngOnInit() {
		this.zone.runOutsideAngular(() => {
			for (let i = 0; i < 100; i++) {
				setTimeout(() => this.counter++, 1000);
			}
			this.zone.run(() => {
				setTimeout(() => (this.counter = this.counter), 3000);
			});
		});
	}

	ngDoCheck() {
		console.log('change detection has been run!');
	}
}
