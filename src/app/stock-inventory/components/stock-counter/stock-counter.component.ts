import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'stock-counter',
	templateUrl: './stock-counter.component.html',
	styleUrls: [ './stock-counter.component.scss' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => StockCounterComponent),
			multi: true
		}
	]
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {
	@Input() step: number = 10;
	@Input() min: number = 10;
	@Input() max: number = 1000;
	isDisabled = false;
	private onTouch = () => {};
	private onModelChange = (_) => {
		console.log(_);
	};

	value: number = 10;
	focus: boolean;

	constructor() {}

	ngOnInit() {}

	increment() {
		this.value = Math.min(this.max, this.value + this.step);
		this.onModelChange(this.value);
	}

	decrement() {
		this.value = Math.max(this.min, this.value - this.step);
		this.onModelChange(this.value);
	}

	registerOnChange(fn) {
		this.onModelChange = fn;
	}
	registerOnTouched(fn) {
		this.onTouch = fn;
	}
	setDisabledState(isDisabled: boolean) {
		this.isDisabled = isDisabled;
	}
	writeValue(value) {
		this.value = value || 10;
	}

	onKeyDown(event: KeyboardEvent) {
		const handlers = {
			ArrowDown: () => this.decrement(),
			ArrowUp: () => this.increment()
		};

		if (handlers[event.code]) {
			handlers[event.code]();
			event.preventDefault();
			event.stopPropagation();
		}
	}

	onBlur(event: FocusEvent) {
		this.focus = false;
		event.preventDefault();
		event.stopPropagation();
		this.onTouch();
	}

	onFocus(event: FocusEvent) {
		this.focus = true;
		event.preventDefault();
		event.stopPropagation();
		this.onTouch();
	}
}
