import { Component } from '@angular/core';

@Component({
  selector: 'food-sp-body',
  templateUrl: './food-sp-body.component.html',
  styleUrls: ['./food-sp-body.component.css'],
})
export class FoodSPBodyComponent {
  constructor() {}

  redirect() {
    window.open(
      'https://www.cajumangaba.com.br/post/jjajangmyeon-%EC%A7%9C%EC%9E%90%EB%A9%B4',
      '_blank'
    );
  }
}
