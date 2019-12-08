import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';
import { By } from '@angular/platform-browser';

describe('StockCounterComponent', () => {
	let component: StockCounterComponent;
	let fixture: ComponentFixture<StockCounterComponent>;
	let el: DebugElement;

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
		el = fixture.debugElement;
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

	// Changes to use ControlValueAccessor no longer need the @Output
	xit('should call the output on a value change', () => {});

	it('should increment when the + button is clicked', () => {
		el.query(By.css('button:first-child')).triggerEventHandler('click', null);
		fixture.detectChanges();
		expect(component.value).toBe(1);
		expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
	});

	it('should increment the value when the up arrow is pressed', () => {
		const event = new Event('KeyboardEvent') as any;
		event.code = 'ArrowUp';
		el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
		fixture.detectChanges();
		expect(component.value).toBe(1);
	});

	it('should decrement when the - button is clicked', () => {
		component.value = 1;
		el.query(By.css('button:last-child')).triggerEventHandler('click', null);
		fixture.detectChanges();
		expect(component.value).toBe(0);
		expect(el.query(By.css('p')).nativeElement.textContent).toBe('0');
	});

	it('should decrement the value when the down arrow is pressed', () => {
		component.value = 1;
		const event = new Event('KeyboardEvent') as any;
		event.code = 'ArrowDown';
		el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
		fixture.detectChanges();
		expect(component.value).toBe(0);
	});
});
