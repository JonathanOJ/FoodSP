import { Component } from '@angular/core';
import { FoodSpNavigationService } from '../service/food-sp-navigation.service';

@Component({
  selector: 'food-sp-header',
  templateUrl: './food-sp-header.component.html',
  styleUrls: ['./food-sp-header.component.css'],
})
export class FoodSPHeaderComponent {
  constructor(private navigationService: FoodSpNavigationService) {}

  navigateToSection(sectionId: string) {
    this.navigationService.changeSection(sectionId);
  }
}
