import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';

describe('StockCounterComponent', () => {
	let component: StockCounterComponent;
	let fixture: ComponentFixture<StockCounterComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ StockCounterComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(StockCounterComponent);
		component = fixture.componentInstance;
		component.value = 0;
		component.step = 1;
		component.min = 0;
		component.max = 1;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
		expect(component.value).toBe(0);
	});

	it('should increment correctly', () => {
		component.increment();
		expect(component.value).toBe(1);
	});

	it('should decrement correctly', () => {
		component.increment();
		expect(component.value).toBe(1);
		component.decrement();
		expect(component.value).toBe(0);
	});

	it('should not decrement below the minimum value', () => {
		component.increment();
		expect(component.value).toBe(1);
		component.decrement();
		expect(component.value).toBe(0);
		component.decrement();
		expect(component.value).toBe(0);
	});

	it('should not increment below the minimum value', () => {
		component.increment();
		expect(component.value).toBe(1);
		component.increment();
		expect(component.value).toBe(1);
	});
});
