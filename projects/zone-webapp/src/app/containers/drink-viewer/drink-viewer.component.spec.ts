import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkViewerComponent } from './drink-viewer.component';

describe('DrinkViewerComponent', () => {
  let component: DrinkViewerComponent;
  let fixture: ComponentFixture<DrinkViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
