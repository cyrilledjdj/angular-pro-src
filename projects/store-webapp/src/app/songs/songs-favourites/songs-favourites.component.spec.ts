import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsFavouritesComponent } from './songs-favourites.component';

describe('SongsFavouritesComponent', () => {
  let component: SongsFavouritesComponent;
  let fixture: ComponentFixture<SongsFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
