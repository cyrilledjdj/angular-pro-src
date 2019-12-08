import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaViewerComponent } from './pizza-viewer.component';

describe('PizzaViewerComponent', () => {
  let component: PizzaViewerComponent;
  let fixture: ComponentFixture<PizzaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
