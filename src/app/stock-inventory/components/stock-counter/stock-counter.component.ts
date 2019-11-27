import { Component, OnInit, Input, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
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
  private onTouch: Function;
  private onModelChange: Function;

  value: number = 10;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('touchstart')
  @HostListener('mousedown')
  triggerTouch() {
    this.onTouch();
  }

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

}
