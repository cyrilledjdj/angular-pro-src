import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListenedComponent } from './songs-listened.component';

describe('SongsListenedComponent', () => {
  let component: SongsListenedComponent;
  let fixture: ComponentFixture<SongsListenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsListenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
