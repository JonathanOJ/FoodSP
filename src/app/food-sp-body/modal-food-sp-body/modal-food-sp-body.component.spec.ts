import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFoodSpBodyComponent } from './modal-food-sp-body.component';

describe('ModalFoodSpBodyComponent', () => {
  let component: ModalFoodSpBodyComponent;
  let fixture: ComponentFixture<ModalFoodSpBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFoodSpBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFoodSpBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
