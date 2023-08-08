import { Injectable } from '@angular/core';
import { UserComments } from '../model/userComments';
import { UserTopFoods } from '../model/userTopFoods';

@Injectable({
  providedIn: 'root',
})
export class FoodSPService {
  constructor() {}

  getComments() {
    let userComments: UserComments[] = [];
    let comment1 = new UserComments();
    comment1.name = 'Maria';
    comment1.comment = 'Muito bom, recomendo!';
    comment1.avaliation = 5;
    comment1.image = 'https://www.w3schools.com/howto/img_avatar.png';
    userComments.push(comment1);

    let comment2 = new UserComments();
    comment2.name = 'João';
    comment2.comment = 'Muito bom, recomendo!';
    comment2.avaliation = 4;
    comment2.image = 'https://www.w3schools.com/howto/img_avatar.png';
    userComments.push(comment2);

    let comment3 = new UserComments();
    comment3.name = 'José';
    comment3.comment = 'Muito bom, recomendo!';
    comment3.avaliation = 3;
    comment3.image = 'https://www.w3schools.com/howto/img_avatar.png';
    userComments.push(comment3);

    let comment4 = new UserComments();
    comment4.name = 'Maria';
    comment4.comment = 'Muito bom, recomendo!';
    comment4.avaliation = 2;
    comment4.image = 'https://www.w3schools.com/howto/img_avatar.png';
    userComments.push(comment4);

    let comment5 = new UserComments();
    comment5.name = 'João';
    comment5.comment = 'Muito bom, recomendo!';
    comment5.avaliation = 1;
    comment5.image = 'https://www.w3schools.com/howto/img_avatar.png';
    userComments.push(comment5);

    let comment6 = new UserComments();
    comment6.name = 'José';
    comment6.comment = 'Muito bom, recomendo!';
    comment6.avaliation = 5;
    comment6.image = 'https://www.w3schools.com/howto/img_avatar.png';
    userComments.push(comment6);

    return userComments;
  }

  getTopFoods() {
    let topFoods: UserTopFoods[] = [];

    let food1 = new UserTopFoods();
    food1.price = '35,99';
    food1.tittle = 'Ramen de Frango';
    food1.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    food1.image = '/assets/lamen tipo 1.png';
    topFoods.push(food1);

    let food2 = new UserTopFoods();
    food2.price = '24,99';
    food2.tittle = 'Ramen Apimentado';
    food2.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    food2.image = '/assets/lamen tipo 2.png';
    topFoods.push(food2);

    let food3 = new UserTopFoods();
    food3.price = '29,99';
    food3.tittle = 'Ramen Tradicional';
    food3.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    food3.image = '/assets/lamen tipo 3.png';
    topFoods.push(food3);

    let food4 = new UserTopFoods();
    food4.price = '39,99';
    food4.tittle = 'Ramen de Barriga de Porco';
    food4.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    food4.image = '/assets/lamen tipo 5.png';
    topFoods.push(food4);

    return topFoods;
  }
}
