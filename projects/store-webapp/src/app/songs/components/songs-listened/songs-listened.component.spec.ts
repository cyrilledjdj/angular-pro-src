import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { SongsListComponent } from '../songs-list/songs-list.component';
import { SongsListenedComponent } from './songs-listened.component';

describe('SongsListenedComponent', () => {
  let component: SongsListenedComponent;
  let fixture: ComponentFixture<SongsListenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongsListenedComponent, SongsListComponent],
      imports: [HttpClientTestingModule],
      providers: [Store, SongsService, { provide: 'api', useValue: '' }],
    }).compileComponents();
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
