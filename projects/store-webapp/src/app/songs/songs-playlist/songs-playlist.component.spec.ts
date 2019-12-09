import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsPlaylistComponent } from './songs-playlist.component';

describe('SongsPlaylistComponent', () => {
  let component: SongsPlaylistComponent;
  let fixture: ComponentFixture<SongsPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
