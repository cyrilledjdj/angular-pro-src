import { CreditCardDirective } from './credit-card.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
	template: `<input placeholder="label" credit-card [value]="value">`
})
class TestComponent {
	value = 123456;
}

fdescribe('CreditCardDirective', () => {
	it('should create an instance', () => {
		const directive = new CreditCardDirective(new ElementRef(document.createElement('input')));
		expect(directive).toBeTruthy();
	});

	let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let el: DebugElement;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CreditCardDirective, TestComponent ]
			}).compileComponents();
			fixture = TestBed.createComponent(TestComponent);
			component = fixture.componentInstance;
			el = fixture.debugElement;
			fixture.detectChanges();
		})
	);

	it('should format the string with spaces', () => {
		const directive: HTMLInputElement = el.query(By.directive(CreditCardDirective)).nativeElement;
		directive.value = '475123';
		directive.dispatchEvent(new Event('input'));
		expect(directive.value).toEqual('4751 23');
		directive.value = '4751238596457436';
		directive.dispatchEvent(new Event('input'));
		expect(directive.value).toBe('4751 2385 9645 7436');
	});

	it('should have a max-length of 16 characters', () => {
		const directive: HTMLInputElement = el.query(By.directive(CreditCardDirective)).nativeElement;
		directive.value = '475123859645743674185825369';
		directive.dispatchEvent(new Event('input'));
		expect(directive.value).toBe('4751 2385 9645 7436');
	});
});
