import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { SongsListComponent } from '../songs-list/songs-list.component';
import { SongsPlaylistComponent } from './songs-playlist.component';

describe('SongsPlaylistComponent', () => {
  let component: SongsPlaylistComponent;
  let fixture: ComponentFixture<SongsPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongsPlaylistComponent, SongsListComponent],
      imports: [HttpClientTestingModule],
      providers: [Store, SongsService, { provide: 'api', useValue: '' }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
