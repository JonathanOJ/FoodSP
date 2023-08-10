import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodSpNavigationService {
  constructor() {}

  private sectionSubject = new Subject<string>();

  sectionChanged$ = this.sectionSubject.asObservable();

  changeSection(sectionId: string) {
    this.sectionSubject.next(sectionId);
  }
}
