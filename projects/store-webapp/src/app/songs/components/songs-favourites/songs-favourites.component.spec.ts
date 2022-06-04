import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { SongsListComponent } from '../songs-list/songs-list.component';
import { SongsFavouritesComponent } from './songs-favourites.component';

describe('SongsFavouritesComponent', () => {
  let component: SongsFavouritesComponent;
  let fixture: ComponentFixture<SongsFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongsFavouritesComponent, SongsListComponent],
      imports: [HttpClientTestingModule],
      providers: [Store, SongsService, { provide: 'api', useValue: '' }],
    }).compileComponents();
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
