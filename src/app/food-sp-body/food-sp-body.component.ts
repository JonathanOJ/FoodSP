import { Component, OnInit } from '@angular/core';
import { UserComments } from '../model/userComments';
import { UserTopFoods } from '../model/userTopFoods';
import { FoodSPService } from '../service/food-sp-models.service';
import { ModalFoodSpBodyComponent } from './modal-food-sp-body/modal-food-sp-body.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodSpNavigationService } from '../service/food-sp-navigation.service';

@Component({
  selector: 'food-sp-body',
  templateUrl: './food-sp-body.component.html',
  styleUrls: ['./food-sp-body.component.css'],
})
export class FoodSPBodyComponent implements OnInit {
  userAllComments: UserComments[] = [];
  userSubComments: UserComments[] = [];
  userTopFoods: UserTopFoods[] = [];
  userEndereco: string = 'Rua 1, 123 - São Paulo - SP';
  constructor(
    private foodSPService: FoodSPService,
    private modalService: NgbModal,
    private navigationService: FoodSpNavigationService
  ) {}

  ngOnInit(): void {
    this.userAllComments = this.foodSPService.getComments();
    this.userTopFoods = this.foodSPService.getTopFoods();

    this.userSubComments = this.userAllComments.slice(0, 2);

    this.navigationService.sectionChanged$.subscribe((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  redirect() {
    window.open(
      'https://www.cajumangaba.com.br/post/jjajangmyeon-%EC%A7%9C%EC%9E%90%EB%A9%B4',
      '_blank'
    );
  }

  redirectMaps(endereco: string) {
    window.open('https://www.google.com/maps/place/' + endereco, '_blank');
  }

  viewAllComments() {
    const activeModal = this.modalService.open(ModalFoodSpBodyComponent, {
      size: 'lg',
      container: 'div',
      backdrop: 'static',
    });
    activeModal.componentInstance.init(true);
    activeModal.componentInstance.setComments(this.userAllComments);
    activeModal.result.then(() => {
      // this.onReturnModal();
    });
  }
}
