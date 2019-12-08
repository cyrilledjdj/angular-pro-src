import { TestBed } from '@angular/core/testing';

import { FoodStoreService } from './food-store.service';

describe('FoodStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodStoreService = TestBed.get(FoodStoreService);
    expect(service).toBeTruthy();
  });
});
