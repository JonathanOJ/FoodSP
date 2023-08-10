import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSPFooterComponent } from './food-sp-footer/food-sp-footer.component';
import { FoodSPBodyComponent } from './food-sp-body/food-sp-body.component';
import { FoodSPHeaderComponent } from './food-sp-header/food-sp-header.component';
import { FoodSPCardComponent } from './food-sp-card/food-sp-card.component';
import { FoodSPCommentsComponent } from './food-sp-comments/food-sp-comments.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalFoodSpBodyComponent } from './food-sp-body/modal-food-sp-body/modal-food-sp-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FoodSPFooterComponent,
    FoodSPBodyComponent,
    FoodSPHeaderComponent,
    FoodSPCardComponent,
    FoodSPCommentsComponent,
    ModalFoodSpBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
