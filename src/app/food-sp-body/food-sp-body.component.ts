import { Component, OnInit } from '@angular/core';
import { UserComments } from '../model/userComments';
import { UserTopFoods } from '../model/userTopFoods';
import { FoodSPService } from '../service/food-sp-models.service';
@Component({
  selector: 'food-sp-body',
  templateUrl: './food-sp-body.component.html',
  styleUrls: ['./food-sp-body.component.css'],
})
export class FoodSPBodyComponent implements OnInit {
  userComments: UserComments[] = [];
  userTopFoods: UserTopFoods[] = [];
  constructor(private foodSPService: FoodSPService) {}

  ngOnInit(): void {
    this.userComments = this.foodSPService.getComments();
    this.userTopFoods = this.foodSPService.getTopFoods();

    console.log(this.userTopFoods);
  }

  redirect() {
    window.open(
      'https://www.cajumangaba.com.br/post/jjajangmyeon-%EC%A7%9C%EC%9E%90%EB%A9%B4',
      '_blank'
    );
  }
}
