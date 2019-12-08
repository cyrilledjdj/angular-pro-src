import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Product, Item } from '../../models/product';
import { StockInventoryService } from '../../services/stock-inventory.service';
import { forkJoin, Observable } from 'rxjs';
import { StockValidators } from './stock-validators';
import { map } from 'rxjs/operators';

@Component({
	selector: 'stock-inventory',
	templateUrl: './stock-inventory.component.html',
	styleUrls: [ './stock-inventory.component.scss' ]
})
export class StockInventoryComponent implements OnInit {
	products: Product[];
	productMap: Map<number, Product>;
	total: number;

	form: FormGroup = this.fb.group(
		{
			store: this.fb.group({
				branch: this.fb.control(
					'',
					[ StockValidators.checkBranch, Validators.required ],
					[ this.validateBranch.bind(this) ]
				),
				code: this.fb.control('', Validators.required)
			}),
			selector: this.createStock({}),
			stock: this.fb.array([])
		},
		{
			validators: [ StockValidators.checkStockExists ]
		}
	);

	constructor(private fb: FormBuilder, private stockService: StockInventoryService) {}

	ngOnInit() {
		const products$ = this.stockService.getProducts();
		const cart$ = this.stockService.getCartItems();
		forkJoin([ cart$, products$ ]).subscribe(([ cart, products ]: [Item[], Product[]]) => {
			const myMap = products.map<[number, Product]>((product) => [ product.id, product ]);
			this.productMap = new Map<number, Product>(myMap);
			this.products = products;
			cart.forEach((item) => this.addStock(item));
			this.calculateTotal(this.form.get('stock').value);
			this.form.get('stock').valueChanges.subscribe((value) => this.calculateTotal(value));
		});
	}

	validateBranch(control: AbstractControl): Observable<ValidationErrors> {
		return this.stockService.checkBranchId(control.value).pipe(
			map((response: boolean) => {
				return response ? null : { unknownBranch: true };
			})
		);
	}

	calculateTotal(value: Item[]) {
		this.total = value.reduce((prev, next) => {
			return prev + next.quantity * this.productMap.get(next.product_id).price;
		}, 0);
	}

	createStock(stock) {
		return this.fb.group({
			product_id: this.fb.control(parseInt(stock.product_id, 10) || ''),
			quantity: this.fb.control(stock.quantity || 10)
		});
	}

	onSubmit() {
		console.log('Submit:', this.form.value);
	}

	addStock(stock) {
		(this.form.get('stock') as FormArray).push(this.createStock(stock));
	}
	removeStock({ group, index }: { group: FormGroup; index: number }) {
		console.log('Removing: ', group);
		(this.form.get('stock') as FormArray).removeAt(index);
	}
}
