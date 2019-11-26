import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements OnInit {

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.value = Math.min(this.max, this.value + this.step);
  }

  decrement() {
    this.value = Math.max(this.min, this.value - this.step);
  }

}
