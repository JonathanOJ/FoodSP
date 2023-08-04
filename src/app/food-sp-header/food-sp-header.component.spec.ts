import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSPHeaderComponent } from './food-sp-header.component';

describe('FoodSPHeaderComponent', () => {
  let component: FoodSPHeaderComponent;
  let fixture: ComponentFixture<FoodSPHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSPHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
