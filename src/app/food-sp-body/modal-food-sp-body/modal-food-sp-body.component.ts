import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserComments } from 'src/app/model/userComments';

@Component({
  selector: 'modal-food-sp-body',
  templateUrl: './modal-food-sp-body.component.html',
  styleUrls: ['./modal-food-sp-body.component.css'],
})
export class ModalFoodSpBodyComponent {
  visible: boolean = false;
  userComments: UserComments[] = [];

  constructor(private activeModal: NgbActiveModal) {}

  init(visible: boolean) {
    this.visible = visible;
  }

  setComments(userComments: UserComments[]) {
    this.userComments = userComments;
  }

  show() {
    this.visible = !this.visible;
    this.activeModal.close();
  }
}
