import { TestBed } from '@angular/core/testing';

import { FoodSPService } from './food-sp-models.service';

describe('FoodSpModelsService', () => {
  let service: FoodSPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodSPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
