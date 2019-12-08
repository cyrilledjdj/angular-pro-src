import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideViewerComponent } from './side-viewer.component';

describe('SideViewerComponent', () => {
  let component: SideViewerComponent;
  let fixture: ComponentFixture<SideViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
