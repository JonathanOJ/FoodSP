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

    const commentsData = [
      {
        name: 'Maria',
        comment: 'Surpreendente! Adorei cada segundo.',
        avaliation: 5,
      },
      {
        name: 'João',
        comment: 'Mais incrível do que eu esperava!',
        avaliation: 4,
      },
      {
        name: 'José',
        comment: 'Quase perfeito, só faltou um toque de magia.',
        avaliation: 4,
      },
      {
        name: 'Ana',
        comment: 'Definitivamente vou voltar para mais!',
        avaliation: 5,
      },
      {
        name: 'Carlos',
        comment: 'Minha expectativa foi pulverizada. Incrível!',
        avaliation: 5,
      },
      {
        name: 'Mariana',
        comment: 'Bom, mas esperava um unicórnio cantando.',
        avaliation: 3,
      },
      {
        name: 'Pedro',
        comment: 'Até meu gato ficou impressionado!',
        avaliation: 4,
      },
      {
        name: 'Sofia',
        comment: 'Avaliaria com 6 estrelas se pudesse!',
        avaliation: 5,
      },
    ];

    for (const commentData of commentsData) {
      const userComment = new UserComments();
      userComment.name = commentData.name;
      userComment.comment = commentData.comment;
      userComment.avaliation = commentData.avaliation;
      userComment.image = 'https://www.w3schools.com/howto/img_avatar.png';
      userComments.push(userComment);
    }

    return userComments;
  }

  getTopFoods() {
    let topFoods: UserTopFoods[] = [];

    const foodData = [
      {
        price: '35,99',
        tittle: 'Ramen de Frango',
        description:
          'Uma explosão de sabores asiáticos que vai te transportar para as ruas de Tóquio.',
        image: './assets/lamen tipo 1.png',
      },
      {
        price: '24,99',
        tittle: 'Ramen Apimentado',
        description:
          'Pimenta que ruge e sabor que incendeia - ousadia e calor em cada garfada.',
        image: './assets/lamen tipo 2.png',
      },
      {
        price: '29,99',
        tittle: 'Ramen Clássico da Casa',
        description:
          'A tradição nunca foi tão deliciosa - experimente o autêntico sabor do Japão.',
        image: './assets/lamen tipo 3.png',
      },
    ];

    for (const foodInfo of foodData) {
      const userTopFood = new UserTopFoods();
      userTopFood.price = foodInfo.price;
      userTopFood.tittle = foodInfo.tittle;
      userTopFood.description = foodInfo.description;
      userTopFood.image = foodInfo.image;
      topFoods.push(userTopFood);
    }

    return topFoods;
  }
}
