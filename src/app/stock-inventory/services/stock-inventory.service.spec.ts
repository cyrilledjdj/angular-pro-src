import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StockInventoryService } from './stock-inventory.service';

function createResponse(body) {
	return of(body);
}

const cartItems = [ { product_id: 1, quantity: 10 }, { product_id: 3, quantity: 50 } ];
const productItems = [
	{ id: 1, price: 2800, name: 'MacBook Pro' },
	{ id: 2, price: 50, name: 'USB-C Adaptor' },
	{ id: 3, price: 400, name: 'iPod' },
	{ id: 4, price: 900, name: 'iPhone' },
	{ id: 5, price: 600, name: 'Apple Watch' }
];

describe('StockInventoryService', () => {
	let service: StockInventoryService;
	let http: HttpClient;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientModule ],
			providers: [ StockInventoryService ]
		});
		http = TestBed.get(HttpClient);
		service = TestBed.get(StockInventoryService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should get the cart items', () => {
		spyOn(http, 'get').and.returnValue(createResponse(cartItems));

		service.getCartItems().subscribe((result) => {
			console.log(result);
			expect(result.length).toBe(2);
		});
	});

	it('should get the product items', () => {
		spyOn(http, 'get').and.returnValue(createResponse(productItems));

		service.getCartItems().subscribe((result) => {
			console.log(result);
			expect(result.length).toBe(5);
		});
	});
});
