import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSPCardComponent } from './food-sp-card.component';

describe('FoodSPCardComponent', () => {
  let component: FoodSPCardComponent;
  let fixture: ComponentFixture<FoodSPCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSPCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSPCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
