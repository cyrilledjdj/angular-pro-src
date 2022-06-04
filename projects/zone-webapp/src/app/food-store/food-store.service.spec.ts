import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_TOKEN } from '../token';
import { FOOD_STORE_CONFIG } from './config';
import { FoodStoreService } from './food-store.service';

describe('FoodStoreService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FoodStoreService,
        { provide: API_TOKEN, useValue: '' },
        {
          provide: FOOD_STORE_CONFIG,
          useValue: {
            storeId: 0,
            storeToken: '',
          },
        },
      ],
    })
  );

  it('should be created', () => {
    const service: FoodStoreService = TestBed.get(FoodStoreService);
    expect(service).toBeTruthy();
  });
});
