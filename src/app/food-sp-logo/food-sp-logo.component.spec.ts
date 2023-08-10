import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSpLogoComponent } from './food-sp-logo.component';

describe('FoodSpLogoComponent', () => {
  let component: FoodSpLogoComponent;
  let fixture: ComponentFixture<FoodSpLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSpLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
