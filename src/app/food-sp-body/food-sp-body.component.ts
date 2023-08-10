import { Component, OnInit } from '@angular/core';
import { UserComments } from '../model/userComments';
import { UserTopFoods } from '../model/userTopFoods';
import { FoodSPService } from '../service/food-sp-models.service';
import { ModalFoodSpBodyComponent } from './modal-food-sp-body/modal-food-sp-body.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'food-sp-body',
  templateUrl: './food-sp-body.component.html',
  styleUrls: ['./food-sp-body.component.css'],
})
export class FoodSPBodyComponent implements OnInit {
  userAllComments: UserComments[] = [];
  userSubComments: UserComments[] = [];
  userTopFoods: UserTopFoods[] = [];
  constructor(
    private foodSPService: FoodSPService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userAllComments = this.foodSPService.getComments();
    this.userTopFoods = this.foodSPService.getTopFoods();

    this.userSubComments = this.userAllComments.slice(0, 2);
  }

  redirect() {
    window.open(
      'https://www.cajumangaba.com.br/post/jjajangmyeon-%EC%A7%9C%EC%9E%90%EB%A9%B4',
      '_blank'
    );
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