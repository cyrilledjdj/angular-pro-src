import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
	describe('Isolate FileSizePipe test: ', () => {
		let pipe;
		beforeEach(() => {
			pipe = new FileSizePipe();
		});

		it('create an instance', () => {
			expect(pipe).toBeTruthy();
		});

		it('should convert bytes to megabytes', () => {
			expect(pipe.transform(123456789)).toBe('117.74MB');
			expect(pipe.transform(987654321)).toBe('941.90MB');
		});

		it('should use the default extension when not supplied', () => {
			expect(pipe.transform(123456789)).toBe('117.74MB');
			expect(pipe.transform(987654321)).toBe('941.90MB');
		});

		it('should override the extension when supplied', () => {
			expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
			expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
		});
	});

	describe('Shallow FileSizePipe test', () => {
		let component: TestComponent;
		let fixture: ComponentFixture<TestComponent>;
		let el: HTMLElement;

		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [ TestComponent, FileSizePipe ]
			});
			fixture = TestBed.createComponent(TestComponent);
			component = fixture.componentInstance;
			el = fixture.nativeElement;
			fixture.detectChanges();
		});

		it('should convert bytes to megabytes', () => {
			expect(el.textContent).toContain('117.74MB');
			component.size = 987654321;
			fixture.detectChanges();
			expect(el.textContent).toContain('941.90MB');
		});

		it('should use the default extension when not supplied', () => {
			expect(el.textContent).toContain('117.74MB');
			component.size = 987654321;
			fixture.detectChanges();
			expect(el.textContent).toContain('941.90MB');
		});

		it('should override the extension when supplied', () => {
			component.suffix = 'myExt';
			fixture.detectChanges();
			expect(el.textContent).toContain('117.74myExt');
			component.size = 987654321;
			fixture.detectChanges();
			expect(el.textContent).toContain('941.90myExt');
		});
	});
});
@Component({
	selector: 'app-test-component',
	template: `
    Size: {{size | fileSize:suffix}}
  `
})
class TestComponent {
	suffix;
	size = 123456789;
}
