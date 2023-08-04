import { Component, Input } from '@angular/core';

@Component({
  selector: 'food-sp-card',
  templateUrl: './food-sp-card.component.html',
  styleUrls: ['./food-sp-card.component.css'],
})
export class FoodSPCardComponent {
  @Input() tittle: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() image: string = '';

  constructor() {}

  returnImage() {
    return this.image;
  }
}
