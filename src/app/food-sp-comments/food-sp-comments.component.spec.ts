import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSPCommentsComponent } from './food-sp-comments.component';

describe('FoodSPCommentsComponent', () => {
  let component: FoodSPCommentsComponent;
  let fixture: ComponentFixture<FoodSPCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSPCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSPCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
