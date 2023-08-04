import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSPBodyComponent } from './food-sp-body.component';

describe('FoodSPBodyComponent', () => {
  let component: FoodSPBodyComponent;
  let fixture: ComponentFixture<FoodSPBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSPBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSPBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
