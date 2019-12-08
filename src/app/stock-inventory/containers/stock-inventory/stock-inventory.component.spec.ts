import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { StockBranchComponent } from '../../components/stock-branch/stock-branch.component';
import { StockCounterComponent } from '../../components/stock-counter/stock-counter.component';
import { StockProductsComponent } from '../../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector.component';
import { StockInventoryService } from '../../services/stock-inventory.service';
import { StockInventoryComponent } from './stock-inventory.component';

const cartItems = [ { product_id: 1, quantity: 10 }, { product_id: 3, quantity: 50 } ];
const productItems = [
	{ id: 1, price: 2800, name: 'MacBook Pro' },
	{ id: 2, price: 50, name: 'USB-C Adaptor' },
	{ id: 3, price: 400, name: 'iPod' },
	{ id: 4, price: 900, name: 'iPhone' },
	{ id: 5, price: 600, name: 'Apple Watch' }
];

class MockcStockInventoryService {
	getCartItems() {
		return of(cartItems);
	}
	getProducts() {
		return of(productItems);
	}
}

describe('StockInventoryComponent', () => {
	let component: StockInventoryComponent;
	let fixture: ComponentFixture<StockInventoryComponent>;
	let el: DebugElement;
	let service: StockInventoryService;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ ReactiveFormsModule ],
				declarations: [
					StockInventoryComponent,
					StockBranchComponent,
					StockCounterComponent,
					StockProductsComponent,
					StockSelectorComponent
				],
				providers: [ { provide: StockInventoryService, useClass: MockcStockInventoryService } ]
			});
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(StockInventoryComponent);
		component = fixture.componentInstance;
		el = fixture.debugElement;
		service = el.injector.get(StockInventoryService);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should get cart items and products init', () => {
		spyOn(service, 'getProducts').and.callThrough();
		spyOn(service, 'getCartItems').and.callThrough();
		component.ngOnInit();
		expect(service.getProducts).toHaveBeenCalled();
		expect(service.getCartItems).toHaveBeenCalled();
	});

	it('should create a productMap from the service response', () => {
		expect(component.productMap.get(1)).toEqual({ id: 1, price: 2800, name: 'MacBook Pro' });
		expect(component.productMap.get(2)).toEqual({ id: 2, price: 50, name: 'USB-C Adaptor' });
	});

	it('should store the products response', () => {
		expect(component.products).toEqual(productItems);
	});
	it('should create a stock item for each cart item', () => {
		spyOn(component, 'addStock');
		component.ngOnInit();
		expect(component.addStock).toHaveBeenCalledWith(cartItems[0]);
		expect(component.addStock).toHaveBeenCalledWith(cartItems[1]);
	});
});
