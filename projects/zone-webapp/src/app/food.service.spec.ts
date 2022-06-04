import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FoodService } from './food.service';
import { API_TOKEN } from './token';

describe('FoodService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_TOKEN, useValue: '' }],
    })
  );

  it('should be created', () => {
    const service: FoodService = TestBed.get(FoodService);
    expect(service).toBeTruthy();
  });
});
