import { TestBed } from '@angular/core/testing';

import { FoodSpNavigationService } from './food-sp-navigation.service';

describe('FoodSpNavigationService', () => {
  let service: FoodSpNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodSpNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
