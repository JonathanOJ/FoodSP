import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'food-sp-comments',
  templateUrl: './food-sp-comments.component.html',
  styleUrls: ['./food-sp-comments.component.css'],
})
export class FoodSPCommentsComponent implements OnInit {
  @Input() comment: string = '';
  @Input() name: string = '';
  @Input() avaliation: number = 0;
  @Input() image: string = '';
  @Input() heightSection: string = '350px';
  @Input() widthImg: string = '120px';
  @Input() heightImg: string = '120px';
  @Input() sizeName: string = '32px';
  @Input() heightComment: string = '100px';
  @Input() sizeComment: string = '20px';
  @Input() sizeAvaliation: string = '24px';

  id: number = Math.floor(Math.random() * 999) + 1;

  ngOnInit() {}
}
