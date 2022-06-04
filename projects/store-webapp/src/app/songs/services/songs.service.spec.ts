import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '../../store';
import { SongsService } from './songs.service';

describe('SongsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Store, { provide: 'api', useValue: '' }],
    })
  );

  it('should be created', () => {
    const service: SongsService = TestBed.get(SongsService);
    expect(service).toBeTruthy();
  });
});
