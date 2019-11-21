import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.renderer.removeClass(this.tooltipElement, 'tooltip--active');
  }

  show() {
    this.renderer.addClass(this.tooltipElement, 'tooltip--active');
  }

  ngOnInit() {
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.appendChild(this.element.nativeElement, this.tooltipElement);
    this.renderer.addClass(this.element.nativeElement, 'tooltip-container');

  }

}
