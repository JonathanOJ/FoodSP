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

  id: number = Math.floor(Math.random() * 999) + 1;

  ngOnInit() {}
}
