import { CommonModule } from '@angular/common';
import { NgModule, Provider, ModuleWithProviders } from '@angular/core';

import { FoodStoreService } from './food-store.service';
import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { HttpClientModule } from '@angular/common/http';

export const FOOD_PROVIDERS: Provider[] = [ FoodStoreService ];

@NgModule({
	declarations: [],
	imports: [ CommonModule, HttpClientModule ]
})
export class FoodStoreModule {
	static forRoot(config: FoodStoreConfig): ModuleWithProviders {
		return {
			ngModule: FoodStoreModule,
			providers: [
				FOOD_PROVIDERS,
				{
					provide: FOOD_STORE_CONFIG,
					useValue: config
				}
			]
		};
	}
}
