import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSPFooterComponent } from './food-sp-footer.component';

describe('FoodSPFooterComponent', () => {
  let component: FoodSPFooterComponent;
  let fixture: ComponentFixture<FoodSPFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSPFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSPFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
